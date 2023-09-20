<template>
  <div>
    <div class="match">
      <div class="matchInfoLeft">
        <img
          class="clock icon"
          src="~/assets/icons/clock.png"
          alt="Clock icon"
        />
        {{ match.gameTime }} Average MMR:
        {{ match.averageRank }}
      </div>
      <div class="matchInfoRight">
        <img
          class="delay icon"
          src="~/assets/icons/delay.png"
          alt="Clock icon"
        />
        {{ match.delay }}
      </div>
      <div class="radiantBlock">
        <div v-for="player in match.players">
          <div class="radiant hero" v-if="player.isRadiant == true">
            {{ player.heroId }}
            <template v-if="player.steamAccount.proSteamAccount">
              {{ player.steamAccount.proSteamAccount.name }}
              PRO {{ player.steamAccount.proSteamAccount.isPro }}
            </template>
            <template v-else>
              {{ player.steamAccount.name }}
            </template>
          </div>
        </div>
      </div>
      <div class="direBlock">
        <div v-for="player in match.players">
          <div class="dire hero" v-if="player.isRadiant == false">
            {{ player.heroId }}
            <template v-if="player.steamAccount.proSteamAccount">
              {{ player.steamAccount.proSteamAccount.name }}
              PRO {{ player.steamAccount.proSteamAccount.isPro }}
            </template>
            <template v-else>
              {{ player.steamAccount.name }}
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.radiantBlock {
  grid-area: radiantBlock;
  text-align: left;
  background-color: gray;
}

.direBlock {
  grid-area: direBlock;
  background-color: rgb(59, 59, 59);
  display: grid;
  justify-items: start;
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

.match {
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-gap: 20px 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'matchInfoLeft matchInfoRight'
    'radiantBlock direBlock';
  background-color: black;
}

.icon {
  width: 3%;
  padding: 5px;
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
    formatTime(seconds) {
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
  //   methods: {
  //     enemyChange() {
  //       this.EnemyFlag = !this.EnemyFlag;
  //       //if (this.EnemyFlag) {
  //       this.$emit("getEnemy", this.enemyId);
  //       //}
  //     },
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
