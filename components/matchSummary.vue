<template>
  <div>
    <div class="match tile is-ancestor box">
      <div class="matchInfoLeft tile is-2 is-parent">
        <div class="tile is-child box">
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-clock" />
          </span>
          {{ formatGameTime }}
        </div>
      </div>
      <div class="matchID tile is-2 is-parent">
        <div class="tile is-child box">ID: {{ match.matchId }}</div>
      </div>
      <div class="avarageMMR tile is-4 is-parent">
        <div class="tile is-child box">
          <template v-if="match.averageRank">
            Average Rank: {{ match.averageRank }} MMR
          </template>
          <template v-else-if="match.league">
            {{ match.league.displayName }}
          </template>
        </div>
      </div>
      <div class="insight tile is-2 is-parent">
        <div class="tile is-child box">Win Probability</div>
      </div>
      <div class="matchInfoRight tile is-2 is-parent">
        <div class="tile is-child box">
          <span class="icon">
            <font-awesome-icon icon="fa-solid fa-hourglass-end" />
          </span>
          {{ formatDelayTime }}
        </div>
      </div>
    </div>
    <div class="matchInfoTotal tile is-ancestor box">
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
          {{ match.radiantScore }}
          <template v-if="match.radiantTeam">
            <img
              class="RadiantLogo teamLogo"
              v-bind:src="match.radiantTeam.logo"
              alt="Radiant logo"
            />
          </template>
        </div>
        <div class="dire_team tile is-child box">
          {{ match.direScore }}
          <template v-if="match.direTeam">
            <img
              class="DireLogo teamLogo"
              v-bind:src="match.direTeam.logo"
              alt="Dire logo"
            />
          </template>
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
      let length = 7
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
