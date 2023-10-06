<template>
  <div>
    <div class="historyMatchInfoTech">
      <div class="tile is-ancestor">
        <div class="matchID tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <span title="Match ID">ID: {{ historyMatch.matchId }}</span>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child top_info box">
            <div class="columns is-gapless">
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-6">
                <article class="media-right">
                  <span>NAVI</span>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div class="score tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <div class="columns">
              <div class="column is-4">
                <figure class="image is-24x24">
                  <img
                    class="is-rounded"
                    src="http://localhost:3000/_nuxt/assets/img/radiant_square.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-4"><span>22:14</span></div>
              <div class="column is-4">
                <figure class="image is-24x24">
                  <img
                    class="is-rounded"
                    src="http://localhost:3000/_nuxt/assets/img/dire_square.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-3 is-parent">
          <div class="tile is-child top_info box" title="Second team">
            <div class="columns is-gapless">
              <div class="column is-6">
                <span>Liquid</span>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
              <div class="column is-1">
                <figure class="image is-24x24">
                  <img
                    src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                    alt="player.hero.displayName"
                    title="player.hero.displayName"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div class="insight_Coef tile is-2 is-parent">
          <div
            class="tile is-child top_info box"
            title="Calculated Coefficient"
          >
            <span>Navi:</span>
            <span>72%</span>
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
