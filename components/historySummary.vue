<template>
  <div>
    <div class="historyMatchInfoTech">
      <div class="tile is-ancestor">
        <div class="tile is-2 is-parent">
          <div class="tile is-child box">
            <span title="Match ID">ID: 432423</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// match.avg.teams.radiantTeam.total_winrate
//           match.avg.teams.radiantTeam.winrateVersus
//           match.avg.teams.radiantTeam.winrateWidthHeroes[array]
//           match.avg.teams.radiantTeam.winrateVersusHeroes[array]

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
