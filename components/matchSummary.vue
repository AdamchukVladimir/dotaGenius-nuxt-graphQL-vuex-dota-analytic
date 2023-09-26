<template>
  <div>
    <div class="hero matchInfoTech">
      <div class="tile is-ancestor">
        <div class="matchInfoLeft tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-clock" />
            </span>
            {{ formatGameTime }}
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-hourglass-end" />
            </span>
            {{ formatDelayTime }}
          </div>
        </div>
        <div class="matchID tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <span>ID: {{ match.matchId }}</span>
          </div>
        </div>
        <div class="score tile is-2 is-parent">
          <div class="tile is-child box">
            <div class="media is-12">
              <div class="columns">
                <div class="column is-4">
                  <figure class="image is-32x32">
                    <img
                      class="is-rounded"
                      v-if="match.radiantTeam"
                      v-bind:src="match.radiantTeam.logo"
                      alt="Radiant image"
                    />
                    <img
                      class="is-rounded"
                      v-else
                      src="~/assets/img/radiant_square.png"
                      alt="Radiant image"
                    />
                  </figure>
                </div>
                <div class="column is-4 line_info">
                  <span>{{ match.radiantScore }}:{{ match.direScore }}</span>
                </div>
                <div class="column is-4">
                  <figure class="image is-32x32">
                    <img
                      class="is-rounded"
                      v-if="match.direTeam"
                      v-bind:src="match.direTeam.logo"
                      alt="Dire image"
                    />
                    <img
                      class="is-rounded"
                      v-else
                      src="~/assets/img/dire_square.png"
                      alt="Radiant image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="insight_Probability tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <span>Dire 69%</span>
          </div>
        </div>
        <div class="insight_Coef tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <span>Coef:</span>
            <span>1.36 / 2.98</span>
          </div>
        </div>
        <div class="avarageMMR tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <template v-if="match.averageRank">
              {{ match.averageRank }} MMR
            </template>
            <template v-else-if="match.league">
              {{ match.league.displayName }}
            </template>
          </div>
        </div>
      </div>
    </div>
    <div class="matchInfoTotal tile is-ancestor">
      <div class="radiantHeroes tile is-4 is-parent is-vertical">
        <div
          class="radiant hero tile is-child box"
          v-for="player in match.players"
          v-if="player.isRadiant == true"
        >
          <div class="player_basic columns is-gapless">
            <div class="avatar column is-two-fifths">
              <span>{{ player.heroId }}</span>
              <template v-if="player.steamAccount.proSteamAccount">
                <template v-if="player.steamAccount.proSteamAccount.team">
                  <span class="no-space aditional_tag">{{
                    player.steamAccount.proSteamAccount.team.tag + '.'
                  }}</span>
                  <span class="no-space nickname">{{
                    player.steamAccount.proSteamAccount.name
                      | truncateTextWithTag
                  }}</span>
                </template>
                <template v-else>
                  {{ player.steamAccount.proSteamAccount.name | truncateText }}
                </template>
              </template>
              <template v-else>
                {{ player.steamAccount.name | truncateText }}
              </template>
            </div>
            <div class="KDA column">
              {{ player.numKills || 0 }}/{{ player.numDeaths || 0 }}/{{
                player.numAssists || 0
              }}
            </div>

            <div class="player_avg_winrate column">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-headset" />
              </span>
              52.5
            </div>
            <div class="hero_avg_winrate column">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chess-rook" />
              </span>
              53.3
            </div>
          </div>
        </div>
      </div>
      <div class="diretHeroes tile is-4 is-parent is-vertical">
        <div
          class="dire hero tile is-child box"
          v-for="player in match.players"
          v-if="player.isRadiant == false"
        >
          <div class="player_basic columns is-gapless">
            <div class="avatar column is-two-fifths">
              <span>{{ player.heroId }}</span>
              <template v-if="player.steamAccount.proSteamAccount">
                <template v-if="player.steamAccount.proSteamAccount.team">
                  <span class="no-space aditional_tag">{{
                    player.steamAccount.proSteamAccount.team.tag + '.'
                  }}</span>
                  <span class="no-space nickname">{{
                    player.steamAccount.proSteamAccount.name
                      | truncateTextWithTag
                  }}</span>
                </template>
                <template v-else>
                  {{ player.steamAccount.proSteamAccount.name | truncateText }}
                </template>
              </template>
              <template v-else>
                {{ player.steamAccount.name | truncateText }}
              </template>
            </div>
            <div class="KDA column">
              {{ player.numKills || 0 }}/{{ player.numDeaths || 0 }}/{{
                player.numAssists || 0
              }}
            </div>

            <div class="player_avg_winrate column">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-headset" />
              </span>
              52.5
            </div>
            <div class="hero_avg_winrate column">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chess-rook" />
              </span>
              53.3
            </div>
          </div>
        </div>
      </div>

      <div class="teamsSummary tile is-4 is-parent is-vertical">
        <div class="radiant_team tile is-child box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  class="is-rounded"
                  v-if="match.radiantTeam"
                  v-bind:src="match.radiantTeam.logo"
                  alt="Radiant image"
                />
                <img
                  class="is-rounded"
                  v-else
                  src="~/assets/img/radiant_square.png"
                  alt="Radiant image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p v-if="match.radiantTeam" class="title is-4">
                {{ match.radiantTeam.name }}
              </p>
              <p class="subtitle is-6">
                <span
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-ranking-star" />
                  </span>
                  52</span
                >
                <span
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-people-arrows" />
                  </span>
                  46</span
                >
              </p>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Winrate</th>
                <th>h1</th>
                <th>h2</th>
                <th>h3</th>
                <th>h4</th>
                <th>h5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>With</th>
                <td>1</td>
                <td>38</td>
                <td>23</td>
                <td>12</td>
                <td>68</td>
              </tr>
              <tr>
                <th>Versus</th>
                <td>2</td>
                <td>38</td>
                <td>20</td>
                <td>11</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="dire_team tile is-child box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  class="is-rounded"
                  v-if="match.direTeam"
                  v-bind:src="match.direTeam.logo"
                  alt="Dire image"
                />
                <img
                  class="is-rounded"
                  v-else
                  src="~/assets/img/dire_square.png"
                  alt="Dire image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p v-if="match.direTeam" class="title is-4">
                {{ match.direTeam.name }}
              </p>
              <p class="subtitle is-6">
                <span
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-ranking-star" />
                  </span>
                  52</span
                >
                <span
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-people-arrows" />
                  </span>
                  46</span
                >
              </p>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Winrate</th>
                <th>h1</th>
                <th>h2</th>
                <th>h3</th>
                <th>h4</th>
                <th>h5</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>With</th>
                <td>1</td>
                <td>38</td>
                <td>23</td>
                <td>12</td>
                <td>68</td>
              </tr>
              <tr>
                <th>Versus</th>
                <td>2</td>
                <td>38</td>
                <td>20</td>
                <td>11</td>
                <td>7</td>
              </tr>
            </tbody>
          </table>
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
  name: 'matchSummary',
  props: {
    match: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formatGameTime() {
      return this.formatTime(this.match.gameTime)
    },
    formatDelayTime() {
      return this.formatTime(this.match.delay)
    },
  },
  methods: {
    formatTime(seconds) {
      //const seconds = this.match.gameTime
      const hours = Math.floor(seconds / 3600)
      const minutes = Math.floor((seconds % 3600) / 60)
      const remainingSeconds = seconds % 60

      if (hours > 0) {
        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
      } else {
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
          .toString()
          .padStart(2, '0')}`
      }
    },
  },
  filters: {
    truncateText(value) {
      let length = 9
      if (value.length > length) {
        return value.slice(0, length) + '...'
      }
      return value
    },
    truncateTextWithTag(value) {
      let length = 6
      if (value.length > length) {
        return value.slice(0, length) + '...'
      }
      return value
    },
  },
  //     enemyClear() {
  //       console.log("enemyClear");
  //       var clearEnemyObject = {
  //         EnemyClearId: this.enemyId,
  //         EnemyClearPickId: this.enemyNumber,
  //       };
  //       this.$emit("enemyClear", clearEnemyObject);
  //     },
  //   },
  //   data() {
  //     return {
  //       EnemyFlag: false,
  //       counter: 0,
  //     };
  //   },
}
</script>

<style>
.matchInfoTech {
  margin-bottom: 3em;
}
.line_info {
  text-align: center;
  align-self: center;
}
.top_info {
  text-align: center;
  align-self: center;
  padding-top: 24px;
  padding-bottom: 24px;
}

.no-space {
  margin: 0;
  padding: 0;
}
.aditional_tag {
  margin-right: -2px;
  color: #4a4a4a77;
}
.nickname {
  margin-left: -2px;
  color: rgba(218, 165, 32, 0.822);
}
/*
<!-player.avg.winrate hero.avg.winrate->
*/

/*
.player_basic {
  color: aliceblue;
  display: flex;
  align-items: center;
  white-space: nowrap;
}
.radiantHeroes {
  grid-area: radiantHeroes;
  background-color: gray;
  display: flex;
  flex-direction: column;
}

.direHeroes {
  grid-area: direHeroes;
  background-color: rgb(59, 59, 59);
  display: flex;
  flex-direction: column;
}
.matchInfoLeft {
  grid-area: matchInfoLeft;
  background-color: rgb(57, 58, 58);
  font-size: 20px;
  display: flex;
  align-items: center;
}

.matchInfoRight {
  grid-area: matchInfoRight;
  background-color: rgb(47, 49, 49);
  font-size: 20px;
  display: flex;
  align-items: center;
}

.teamsSummary{
  grid-area: teamsSummary;
  background-color: rgb(89, 92, 92);
  font-size: 20px;
  display: flex;
  flex-direction: column;
}

.match {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 20px 10px;
  grid-template-columns: 2fr 1fr 2fr;
  grid-template-areas:
    'matchInfoLeft matchInfoLeft matchInfoRight'
    'radiantHeroes teamsSummary direHeroes';
  background-color: black;
}

.icon {
  width: 3%;
  padding: 5px;
}

.aditional {
  color: rgb(221, 214, 214);
}
.pro {
  opacity: 0.8;
}
*/
</style>
