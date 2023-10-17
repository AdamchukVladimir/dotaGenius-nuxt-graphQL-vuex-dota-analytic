<template>
  <div v-if="match" class="container">
    <div class="hero matchInfoTech">
      <div class="tile is-ancestor">
        <div class="matchID tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <span title="Match ID">ID: {{ match.matchId }}</span>
          </div>
        </div>
        <div class="avarageMMR tile is-2 is-parent">
          <div class="tile is-child top_info box">
            <template v-if="match.averageRank">
              <span title="Average Rank">{{ match.averageRank }} MMR</span>
            </template>
            <template v-else-if="match.league">
              <span :title="match.league.displayName">{{
                match.league.displayName | truncateText(16)
              }}</span>
            </template>
          </div>
        </div>
        <div class="score tile is-4 is-parent">
          <div class="tile is-child box">
            <div class="media">
              <div class="columns">
                <div class="column is-4" title="Game Time">
                  <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-clock" />
                  </span>
                  {{ formatGameTime }}
                </div>
                <div class="column is-2 hotpadding">
                  <figure class="image is-square is-32x32">
                    <img
                      class="is-rounded"
                      v-if="match.radiantTeam"
                      v-bind:src="match.radiantTeam.logo"
                      :alt="match.radiantTeam.name"
                      :title="match.radiantTeam.name"
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
                    >{{ match.radiantScore }}:{{ match.direScore }}</span
                  >
                </div>
                <div class="column is-2">
                  <figure class="image is-square is-32x32">
                    <img
                      class="is-rounded"
                      v-if="match.direTeam"
                      v-bind:src="match.direTeam.logo"
                      :alt="match.direTeam.name"
                      :title="match.direTeam.name"
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
                <div class="column is-4" title="Delay Time">
                  <span class="icon">
                    <font-awesome-icon icon="fa-solid fa-hourglass-end" />
                  </span>
                  {{ formatDelayTime }}
                </div>
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
    <div class="matchInfoTotal tile is-ancestor">
      <div class="radiantHeroes tile is-6 is-parent is-vertical">
        <div
          class="radiant hero tile is-child has-background-primary-light box"
          v-for="player in match.players"
          v-if="player.isRadiant == true"
        >
          <div class="player_basic columns is-gapless">
            <div class="avatar column is-1">
              <figure class="image is-24x24">
                <img
                  :src="getHeroIconUrl(player.hero.name)"
                  :alt="player.hero.displayName"
                  :title="player.hero.displayName"
                />
              </figure>
            </div>
            <div class="player_nickname column is-3">
              <template v-if="player.steamAccount.proSteamAccount">
                <template v-if="player.steamAccount.proSteamAccount.team">
                  <span
                    class="no-space aditional_tag"
                    :title="player.steamAccount.proSteamAccount.team.name"
                    >{{
                      player.steamAccount.proSteamAccount.team.tag + '.'
                    }}</span
                  >
                  <span
                    class="no-space nickname"
                    :title="player.steamAccount.proSteamAccount.name"
                    >{{
                      player.steamAccount.proSteamAccount.name
                        | truncateText(11)
                    }}</span
                  >
                </template>
                <template v-else>
                  <span :title="player.steamAccount.proSteamAccount.name">
                    {{
                      player.steamAccount.proSteamAccount.name
                        | truncateText(14)
                    }}
                  </span>
                </template>
              </template>
              <template v-else>
                <span :title="player.steamAccount.name">{{
                  player.steamAccount.name | truncateText(14)
                }}</span>
              </template>
            </div>
            <div class="KDA column is-2">
              <div class="columns is-gapless" title="KDA">
                <div class="column kda_number">
                  {{ player.numKills || 0 }}
                </div>
                <div class="column kda_slash is-1">/</div>
                <div class="column kda_number">
                  {{ player.numDeaths || 0 }}
                </div>
                <div class="column kda_slash is-1">/</div>
                <div class="column kda_number is-3">
                  {{ player.numAssists || 0 }}
                </div>
              </div>
            </div>
            <div class="networtch top_info column is-2">
              <span class="icon">
                <font-awesome-icon icon="coins" />
              </span>
              56743
            </div>

            <div
              class="player_avg_winrate top_info column is-2"
              title="Player Winrate"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-headset" />
              </span>
              52.5
            </div>
            <div
              class="hero_avg_winrate top_info column is-2"
              title="Hero Winrate"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chess-rook" />
              </span>
              53.3
            </div>
          </div>
        </div>
      </div>

      <div class="direHeroes tile is-6 is-parent is-vertical">
        <div
          class="dire hero tile is-child has-background-danger-light box"
          v-for="player in match.players"
          v-if="player.isRadiant == false"
        >
          <div class="player_basic columns is-gapless">
            <div class="avatar column is-1">
              <figure class="image is-24x24">
                <img
                  :src="getHeroIconUrl(player.hero.name)"
                  :alt="player.hero.displayName"
                  :title="player.hero.displayName"
                />
              </figure>
            </div>
            <div class="player_nickname column is-3">
              <template v-if="player.steamAccount.proSteamAccount">
                <template v-if="player.steamAccount.proSteamAccount.team">
                  <span
                    class="no-space aditional_tag"
                    :title="player.steamAccount.proSteamAccount.team.name"
                    >{{
                      player.steamAccount.proSteamAccount.team.tag + '.'
                    }}</span
                  >
                  <span
                    class="no-space nickname"
                    :title="player.steamAccount.proSteamAccount.name"
                    >{{
                      player.steamAccount.proSteamAccount.name
                        | truncateText(11)
                    }}</span
                  >
                </template>
                <template v-else>
                  <span :title="player.steamAccount.proSteamAccount.name">
                    {{
                      player.steamAccount.proSteamAccount.name
                        | truncateText(14)
                    }}
                  </span>
                </template>
              </template>
              <template v-else>
                <span :title="player.steamAccount.name">{{
                  player.steamAccount.name | truncateText(14)
                }}</span>
              </template>
            </div>
            <div class="KDA column is-2">
              <div class="columns is-gapless" title="KDA">
                <div class="column kda_number">
                  {{ player.numKills || 0 }}
                </div>
                <div class="column kda_slash is-1">/</div>
                <div class="column kda_number">
                  {{ player.numDeaths || 0 }}
                </div>
                <div class="column kda_slash is-1">/</div>
                <div class="column kda_number is-3">
                  {{ player.numAssists || 0 }}
                </div>
              </div>
            </div>
            <div class="networtch top_info column is-2">
              <span class="icon">
                <font-awesome-icon icon="coins" />
              </span>
              56743
            </div>

            <div
              class="player_avg_winrate top_info column is-2"
              title="Player Winrate"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-headset" />
              </span>
              52.5
            </div>
            <div
              class="hero_avg_winrate top_info column is-2"
              title="Hero Winrate"
            >
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-chess-rook" />
              </span>
              53.3
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="matchTeamInfo tile is-ancestor">
      <div class="teamsSummaryRadiant tile is-3 is-parent">
        <div
          class="radiant_team tile has-background-primary-light is-child box"
        >
          <div class="media">
            <div class="media-left">
              <figure class="image is-square is-48x48">
                <img
                  class="is-rounded"
                  v-if="match.radiantTeam"
                  v-bind:src="match.radiantTeam.logo"
                  :alt="match.radiantTeam.name"
                  :title="match.radiantTeam.name"
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
            <div class="media-content">
              <p v-if="match.radiantTeam" class="title is-4">
                {{ match.radiantTeam.name }}
              </p>
              <p class="subtitle is-6">
                <span title="Total Team Winrate"
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-ranking-star" />
                  </span>
                  52</span
                >
                <span title="Team Wintrate VS Opponent"
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-people-arrows" />
                  </span>
                  46</span
                >
              </p>
            </div>
          </div>
          <table class="table has-background-primary-light">
            <thead>
              <tr>
                <th>Win%</th>
                <th
                  v-for="player in match.players"
                  v-if="player.isRadiant == true"
                >
                  <figure class="image is-16x16">
                    <img
                      :src="getHeroIconUrl(player.hero.name)"
                      :alt="player.hero.displayName"
                      :title="player.hero.displayName"
                    />
                  </figure>
                </th>
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
          <table class="table has-background-primary-light">
            <thead>
              <tr>
                <th>Best</th>
                <th
                  v-for="player in match.players"
                  v-if="player.isRadiant == false"
                >
                  <figure class="image is-16x16">
                    <img
                      :src="getHeroIconUrl(player.hero.name)"
                      :alt="player.hero.displayName"
                      :title="player.hero.displayName"
                    />
                  </figure>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Win%</th>
                <td>55</td>
                <td>57</td>
                <td>62</td>
                <td>54</td>
                <td>61</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="last_meet tile is-6 is-parent">
        <div class="tile is-child box">
          <div class="columns">
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
            <div class="column top_info is-4">
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
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
          <div class="columns">
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
            <div class="column top_info is-4">
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
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
          <div class="columns">
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
            <div class="column top_info is-4">
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
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
          <div class="columns">
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
            <div class="column top_info is-4">
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
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
        </div>
      </div>
      <div class="teamsSummaryDire tile is-3 is-parent">
        <div class="dire_team tile has-background-danger-light is-child box">
          <div class="media">
            <div class="media-left">
              <figure class="image is-square is-48x48">
                <img
                  class="is-rounded"
                  v-if="match.direTeam"
                  v-bind:src="match.direTeam.logo"
                  :alt="match.direTeam.name"
                  :title="match.direTeam.name"
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
            <div class="media-content">
              <p v-if="match.direTeam" class="title is-4">
                {{ match.direTeam.name }}
              </p>
              <p class="subtitle is-6">
                <span title="Total Team Winrate"
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-ranking-star" />
                  </span>
                  52</span
                >
                <span title="Team Winrate VS Opponent"
                  ><span class="icon">
                    <font-awesome-icon icon="fa-solid fa-people-arrows" />
                  </span>
                  46</span
                >
              </p>
            </div>
          </div>
          <table class="table has-background-danger-light">
            <thead>
              <tr>
                <th>Win%</th>
                <th
                  v-for="player in match.players"
                  v-if="player.isRadiant == false"
                >
                  <figure class="image is-16x16">
                    <img
                      :src="getHeroIconUrl(player.hero.name)"
                      :alt="player.hero.displayName"
                      :title="player.hero.displayName"
                    />
                  </figure>
                </th>
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
          <table class="table has-background-danger-light">
            <thead>
              <tr>
                <th>Best</th>
                <th
                  v-for="player in match.players"
                  v-if="player.isRadiant == false"
                >
                  <figure class="image is-16x16">
                    <img
                      :src="getHeroIconUrl(player.hero.name)"
                      :alt="player.hero.displayName"
                      :title="player.hero.displayName"
                    />
                  </figure>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Win%</th>
                <td>55</td>
                <td>57</td>
                <td>62</td>
                <td>54</td>
                <td>61</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="oldMatches tile is-ancestor">
      <div class="tile is-6 is-parent">
        <div class="tile is-child top_info has-background-primary-light box">
          <div class="columns">
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
            <div class="column top_info is-4">
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
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
        </div>
      </div>

      <div class="tile is-6 is-parent">
        <div class="tile is-child top_info has-background-danger-light box">
          <div class="columns">
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
            <div class="column top_info is-4">
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
            <div class="column top_info is-4">
              <div class="columns is-gapless">
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
                  <figure class="image is-24x24">
                    <img
                      src="https://cdn.stratz.com/images/dota2/heroes/skeleton_king_icon.png"
                      alt="player.hero.displayName"
                      title="player.hero.displayName"
                    />
                  </figure>
                </div>
                <div class="column is-2">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  middleware: 'liveAccess',
  data() {
    return {
      id: null, // Идентификатор матча
      matchData: null, // Данные матча
    }
  },

  mounted() {
    console.log('route ' + JSON.stringify(this.$route.params))
  },
  computed: {
    //Получаем данные матча из store, timeout нужен чтобы при перезагрузки страницы успели подтянуться данные в store
    match() {
      setTimeout(() => {
        return this.$store.state.matchesStore.matches.find(
          (match) => match.matchId == this.$route.params.live
        )
      }, 2000)
      return this.$store.state.matchesStore.matches.find(
        (match) => match.matchId == this.$route.params.live
      )
    },
    formatGameTime() {
      return this.formatTime(this.match.gameTime)
    },
    formatDelayTime() {
      return this.formatTime(this.match.delay)
    },
  },
  methods: {
    ...mapMutations('matchesStore', ['setSortedPlayers']),
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
    getHeroIconUrl(heroName) {
      const imagePrefixRemoved = heroName.replace('npc_dota_hero_', '')
      let imageUrl = ''
      if (heroName == 'npc_dota_hero_base')
        return `https://cdn.stratz.com/images/dota2/heroes/placeholder_icon.png`
      else {
        imageUrl = `https://cdn.stratz.com/images/dota2/heroes/${imagePrefixRemoved}_icon.png`
      }
      return imageUrl
    },
  },
  filters: {
    truncateText(value, length) {
      if (value.length > length) {
        return value.slice(0, length) + '...'
      }
      return value
    },
  },
}
</script>

<style>
.oldPicture {
  display: grid;
  place-items: center;
}
</style>
