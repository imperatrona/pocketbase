package auth

import (
	"context"
	"encoding/json"
	"fmt"
	"strconv"

	"golang.org/x/oauth2"
)

// Vk Oauth docs: https://dev.vk.com/api/oauth-parameters

var _ Provider = (*Vk)(nil)

// NameVk is the unique name of the Vk provider.
const NameVk string = "vk"

// Vk allows authentication via Vk OAuth2.
type Vk struct {
	*baseProvider
}

// NewVkProvider creates new Vk provider instance with some defaults.
func NewVkProvider() *Vk {
	return &Vk{&baseProvider{
		scopes:     []string{"read:user", "user:email"},
		authUrl:    "https://oauth.vk.com/authorize?scope=email&v=5.131",
		tokenUrl:   "https://oauth.vk.com/access_token?v=5.131",
		userApiUrl: "https://api.vk.com/method/users.get?fields=photo_max,screen_name&v=5.131",
	}}
}

// FetchAuthUser returns an AuthUser instance based on Vk's user api.
//
// API reference: https://dev.vk.com/method/users.get
func (p *Vk) FetchAuthUser(token *oauth2.Token) (*AuthUser, error) {
	data, err := p.FetchRawUserData(token)
	if err != nil {
		return nil, err
	}
	fmt.Println(p)

	rawUser := map[string]any{}
	if err := json.Unmarshal(data, &rawUser); err != nil {
		return nil, err
	}

	extracted := struct {
		Response []struct {
			Id        int    `json:"id"`
			FirstName string `json:"first_name"`
			LastName  string `json:"last_name"`
			Username  string `json:"screen_name"`
			AvatarUrl string `json:"photo_max"`
		} `json:"response"`
	}{}

	if err := json.Unmarshal(data, &extracted); err != nil {
		return nil, err
	}

	if len(extracted.Response) == 0 {
		return nil, err
	}

	user := &AuthUser{
		Id:           strconv.Itoa(extracted.Response[0].Id),
		Name:         extracted.Response[0].FirstName + " " + extracted.Response[0].LastName,
		Username:     extracted.Response[0].Username,
		AvatarUrl:    extracted.Response[0].AvatarUrl,
		RawUser:      rawUser,
		AccessToken:  token.AccessToken,
		RefreshToken: token.RefreshToken,
	}
	fmt.Println(user)

	return user, nil
}

// FetchToken implements Provider.FetchToken interface.
func (p *Vk) FetchToken(code string, opts ...oauth2.AuthCodeOption) (*oauth2.Token, error) {
	return p.oauth2Config().Exchange(context.Background(), code, opts...)
}
