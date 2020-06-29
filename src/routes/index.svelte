<script>
  import Fab, { Label, Icon } from "@smui/fab";
  import Button, { Group, GroupItem } from "@smui/button";
  import { goto, stores } from "@sapper/app";

  const { session } = stores();

  let superText = "";
  let items = [
    {
      user: "Gravy's Couch Book",
      description: "Labron fouls out of game 6 against the Miami Heat",
      amount: "0.00000300 btc"
    },
    {
      user: "Flowy's Juicer",
      description: "Tiger Woods -13 +/-2 Masters",
      amount: "0.00005000 btc"
    },
    {
      user: "Magic Couch",
      description: "John Jones eye poke",
      amount: "0.00005000 btc"
    },
    {
      user: "Magic Couch",
      description: "Draymond Green kicks someone in the nuts this game",
      amount: "0.00005000 btc"
    },
    {
      user: "Davies",
      description: "Tigers world series",
      amount: "0.00005000 btc"
    },
    {
      user: "lion's den",
      description: "Amanda Nunes TKO round 1",
      amount: "0.00008890 btc"
    },
    {
      user: "Wyatt Hotel",
      description: "Fabricio Werdum KO, TKO, or Submission",
      amount: "0.00000900 btc"
    },
    {
      user: "tokio",
      description: "Racing Esports draw",
      amount: "0.00000300 btc"
    }
  ];
</script>

<style>
  h1,
  figure,
  p,
  div {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }
  .content {
    background-color: rgb(22, 22, 22);
    color: #fff;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>fungi</title>
</svelte:head>

<div class="content" bp="padding">
  <img src="mushroom2.jpg" , alt="" />
</div>
