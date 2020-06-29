<script>
  import IconButton, { Icon } from "@smui/icon-button";
  import { goto, stores } from "@sapper/app";

  const { session } = stores();

  export let segment = null;
</script>

<style>
  nav {
    color: #fff;
    background-color: rgb(9, 9, 9);
    height: 46px;
    padding-left: 20px;
  }

  div {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 46px;
    line-height: 46px;
    font-size: 13px;
    text-align: center;
  }

  .outline {
    margin-top: 3px;
    margin-bottom: 3px;
    height: 40px;
    border-radius: 3px;
  }
  .btc-symbol {
    width: 24px;
    height: 24px;
    position: relative;
    top: 3px;
  }
  .balance {
    position: relative;
    left: -3px;
    top: -3px;
  }
  .available {
    font-size: 1.1em;
    font-weight: bold;
    background-color: rgba(23, 150, 110, 0.4);
  }
  .play {
    font-size: 1.1em;
    font-weight: bold;
    background-color: rgba(255, 0, 0, 0.3);
  }
  .nav-icon {
    margin-right: 9px;
  }
</style>

<nav class={segment}>
  <div bp="grid 2">
    <div bp="offset-3">
      <IconButton class="material-icons" on:click={() => goto('/messages')}>
        fastfood
      </IconButton>
    </div>
    <div>
      <div>
        <div on:click={() => goto('/signin')}>sign in</div>
      </div>
    </div>
  </div>
</nav>
