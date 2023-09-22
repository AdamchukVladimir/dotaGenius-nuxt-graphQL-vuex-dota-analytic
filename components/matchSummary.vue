<template>
  <div>
    <div class="match">
      <div class="matchInfoLeft">
        <img
          class="clock icon"
          src="~/assets/icons/clock.png"
          alt="Clock icon"
        />
        {{ formatGameTime }}
        ID: {{ match.matchId }}
        <template v-if="match.averageRank">
          Average MMR:
          {{ match.averageRank }}
        </template>
      </div>
      <div class="matchInfoRight">
        <img
          class="delay icon"
          src="~/assets/icons/delay.png"
          alt="Delay icon"
        />
        {{ formatDelayTime }}
      </div>
      <div class="radiantHeroes">
        <div v-for="player in match.players">
          <div class="radiant hero" v-if="player.isRadiant == true">
            <span class="player_basic">
              {{ player.heroId }}
              <template v-if="player.steamAccount.proSteamAccount">
                <img
                  class="pro icon"
                  src="~/assets/icons/dota.png"
                  alt="Pro icon"
                />
                <template v-if="player.steamAccount.team">
                  <span class="aditional tag">{{
                    player.steamAccount.proSteamAccount.team.tag
                  }}</span>
                </template>
                {{ player.steamAccount.proSteamAccount.name }}
              </template>
              <template v-else>
                {{ player.steamAccount.name }}
              </template>
              <span class="KDA">
                _KDA {{ player.numKills }} / {{ player.numDeaths }} /
                {{ player.numAssists }}
              </span>
              <span class="networth"> _networth {{ player.networth }} </span>
            </span>
            <span class="player_avg">
              <template v-if="player.steamAccount.proSteamAccount">
                signHeroes{{
                  player.steamAccount.proSteamAccount.signatureHeroes
                }}
              </template>
              player.avg.winrate hero.avg.winrate
            </span>
          </div>
        </div>
      </div>
      <div class="direHeroes">
        <div v-for="player in match.players">
          <div class="dire hero" v-if="player.isRadiant == false">
            <span class="player_basic">
              {{ player.heroId }}
              <template v-if="player.steamAccount.proSteamAccount">
                <img
                  class="pro icon"
                  src="~/assets/icons/dota.png"
                  alt="Pro icon"
                />
                <template v-if="player.steamAccount.team">
                  <span class="aditional tag">{{
                    player.steamAccount.proSteamAccount.team.tag
                  }}</span>
                </template>
                {{ player.steamAccount.proSteamAccount.name }}
              </template>
              <template v-else>
                {{ player.steamAccount.name }}
              </template>
            </span>
            <span class="KDA">
                _KDA {{ player.numKills }} / {{ player.numDeaths }} /
                {{ player.numAssists }}
              </span>
              <span class="networth"> _networth {{ player.networth }} </span>
            </span>
            <span class="player_avg">
              <template v-if="player.steamAccount.proSteamAccount">
                signHeroes{{
                  player.steamAccount.proSteamAccount.signatureHeroes
                }}
              </template>
              player.avg.winrate hero.avg.winrate
            </span>
          </div>
        </div>
      </div>
      <div class="teamsSummary">
        <span class="radiant_team">
           <img
                  class="teamLogo icon"
                  src={this.props.match.radiantTeam.logo}
                  alt="Radiant logo"
                />
          match.avg.teams.radiantTeam.total_winrate 
          match.avg.teams.radiantTeam.winrateVersus
          match.avg.teams.radiantTeam.winrateWidthHeroes[array]
          match.avg.teams.radiantTeam.winrateVersusHeroes[array]
           
        </span>
        <span class="insight">
          Win Probability 
          "Side winrate"

          coefficient
        </span>
        <span class="dire_team">
          <img
                  class="teamLogo icon"
                  src={this.props.match.direTeam.logo}
                  alt="Dire logo"
                />
          match.avg.teams.direTeam.total_winrate 
          match.avg.teams.direTeam.winrateVersus
          match.avg.teams.direTeam.winrateWidthHeroes[array]
          match.avg.teams.direTeam.winrateVersusHeroes[array]
           
        </span>
      </div>
    </div>
  </div>
</template>
<style>
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
</style>

<script>
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
