<script>
  import { ActionButton, Modal } from "@budibase/bbui"
  import CreateEditRow from "../modals/CreateEditRow.svelte"

  export let modalContentComponent = CreateEditRow
  export let title = "Create row"

  let modal
</script>

<ActionButton icon="TableRowAddBottom" size="S" quiet on:click={modal.show}>
  {title}
</ActionButton>
<Modal bind:this={modal}>
  <svelte:component this={modalContentComponent} on:updaterows />
</Modal>
