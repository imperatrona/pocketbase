<script>
    import { createEventDispatcher } from "svelte";
    import ApiClient from "@/utils/ApiClient";
    import CommonHelper from "@/utils/CommonHelper";
    import { confirm } from "@/stores/confirmation";
    import { addSuccessToast } from "@/stores/toasts";
    import providersList from "@/providers.js";

    const dispatch = createEventDispatcher();

    export let record;

    let externalAuths = [];
    let isLoading = false;

    function getProviderTitle(provider) {
        return providersList[provider + "Auth"]?.title || CommonHelper.sentenize(provider, false);
    }

    function getProviderIcon(provider) {
        return providersList[provider + "Auth"]?.icon || `ri-${provider}-line`;
    }

    async function loadExternalAuths() {
        if (!record?.id) {
            externalAuths = [];
            isLoading = false;
            return;
        }

        isLoading = true;

        try {
            externalAuths = await ApiClient.collection(record.collectionId).listExternalAuths(record.id);
        } catch (err) {
            ApiClient.errorResponseHandler(err);
        }

        isLoading = false;
    }

    function unlinkExternalAuth(provider) {
        if (!record?.id || !provider) {
            return; // nothing to unlink
        }

        confirm(`Do you really want to unlink the ${getProviderTitle(provider)} provider?`, () => {
            return ApiClient.collection(record.collectionId)
                .unlinkExternalAuth(record.id, provider)
                .then(() => {
                    addSuccessToast(`Successfully unlinked the ${getProviderTitle(provider)} provider.`);
                    dispatch("unlink", provider);
                    loadExternalAuths(); // reload list
                })
                .catch((err) => {
                    ApiClient.errorResponseHandler(err);
                });
        });
    }

    loadExternalAuths();
</script>

{#if isLoading}
    <div class="block txt-center">
        <span class="loader" />
    </div>
{:else if record?.id && externalAuths.length}
    <div class="list">
        {#each externalAuths as auth}
            <div class="list-item">
                <i class={getProviderIcon(auth.provider)} />
                <span class="txt">{getProviderTitle(auth.provider)}</span>
                <div class="txt-hint">ID: {auth.providerId}</div>
                <button
                    type="button"
                    class="btn btn-transparent link-hint btn-circle btn-sm m-l-auto"
                    on:click={() => unlinkExternalAuth(auth.provider)}
                >
                    <i class="ri-close-line" />
                </button>
            </div>
        {/each}
    </div>
{:else}
    <h6 class="txt-hint txt-center m-t-sm m-b-sm">No linked OAuth2 providers.</h6>
{/if}

<style>
    :global(.ri-vk-fill::before) {
        content: "";
        background: url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M3.37413 3.37413C0 6.74826 0 12.1788 0 23.04V24.96C0 35.8212 0 41.2517 3.37413 44.6259C6.74826 48 12.1788 48 23.04 48H24.96C35.8212 48 41.2517 48 44.6259 44.6259C48 41.2517 48 35.8212 48 24.96V23.04C48 12.1788 48 6.74826 44.6259 3.37413C41.2517 0 35.8212 0 24.96 0H23.04C12.1788 0 6.74826 0 3.37413 3.37413ZM8.1001 14.6001C8.3601 27.0801 14.6 34.5801 25.54 34.5801H26.1602V27.4401C30.1802 27.8401 33.2199 30.7801 34.4399 34.5801H40.1201C38.5601 28.9001 34.4599 25.7601 31.8999 24.5601C34.4599 23.0801 38.0599 19.4801 38.9199 14.6001H33.7598C32.6398 18.5601 29.3202 22.1601 26.1602 22.5001V14.6001H21V28.4401C17.8 27.6401 13.7601 23.7601 13.5801 14.6001H8.1001Z' fill='%2316161a'/%3E%3C/svg%3E");
        background-size: cover;
        width: 1.1238rem;
        aspect-ratio: 1;
        margin-top: 3px;
    }
</style>
