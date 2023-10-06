<template>
  <div>
    <div class="historyMatchInfoTech">
      <div class="tile is-ancestor">
        <div class="matchID tile is-2 is-parent">
          <div class="tile is-child box">
            <span title="Match ID">ID: {{ historyMatch.matchId }}</span>
          </div>
        </div>
        <div class="tile is-2 is-parent">
          <div class="tile is-child box">
            <span> testest</span>
          </div>
        </div>
        <div class="score tile is-4 is-parent">
          <div class="tile is-child box">
            <div class="columns">
              <div class="column is-4" title="Game Time">
                <span class="icon">
                  <font-awesome-icon icon="fa-solid fa-clock" />
                </span>
                10:00
              </div>
              <div class="column is-2 hotpadding">
                <figure class="image is-square is-32x32">
                  <img
                    class="is-rounded"
                    v-if="historyMatch.radiantTeam"
                    v-bind:src="historyMatch.radiantTeam.logo"
                    :alt="historyMatch.radiantTeam.name"
                    :title="historyMatch.radiantTeam.name"
                  />
                  <img
                    class="is-rounded"
                    v-else
                    src="~/assets/img/radiant_square.png"
                    alt="Radiant image"
                    title="Radiant"
                  />
                </figure>
              </div>
              <div class="column is-2 line_info hotpadding">
                <span title="Game Score"
                  >{{ historyMatch.radiantScore }}:{{
                    historyMatch.direScore
                  }}</span
                >
              </div>
              <div class="column is-2">
                <figure class="image is-square is-32x32">
                  <img
                    class="is-rounded"
                    v-if="historyMatch.direTeam"
                    v-bind:src="historyMatch.direTeam.logo"
                    :alt="historyhistoryMatch.direTeam.name"
                    :title="historyMatch.direTeam.name"
                  />
                  <img
                    class="is-rounded"
                    v-else
                    src="~/assets/img/dire_square.png"
                    alt="Dire image"
                    title="Dire"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="insight_Probability tile is-2 is-parent">
          <div
            class="tile is-child top_info box"
            title="Probability Of Winning"
          >
            <span>Dire 69%</span>
          </div>
        </div>
        <div class="insight_Coef tile is-2 is-parent">
          <div
            class="tile is-child top_info box"
            title="Calculated Coefficient"
          >
            <span>Coef:</span>
            <span>1.36 / 2.98</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// historyMatch.avg.teams.radiantTeam.total_winrate
//           historyMatch.avg.teams.radiantTeam.winrateVersus
//           historyMatch.avg.teams.radiantTeam.winrateWidthHeroes[array]
//           historyMatch.avg.teams.radiantTeam.winrateVersusHeroes[array]

export default {
  name: 'historyMatchSummary',
  props: {
    historyMatch: {
      type: Object,
      required: true,
    },
  },
}
</script>
