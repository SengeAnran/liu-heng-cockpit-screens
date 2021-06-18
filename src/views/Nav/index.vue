<template>
  <div class="nav">
    <div class="left-secondary-nav secondary-nav">
      <router-link class="nav-item" v-for="item in leftSecondaryNav" :key="item.name" :to="{ name: item.name }">
        <span class="nav-name">{{ item.name }}</span>
        <div class="indicators">
          <div v-for="item in (item.meta && item.meta.indicator) || []" :key="item.name" class="item">
            <span class="name">{{ item.name }}</span>
            <span class="value">
              {{ item.value }}
              <span class="unit">{{ item.unit }}</span>
            </span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="right-secondary-nav secondary-nav">
      <router-link class="nav-item" :to="{ name: item.name }" v-for="item in rightSecondaryNav" :key="item.name">
        <span class="nav-name">{{ item.name }}</span>
        <div class="indicators">
          <div v-for="item in (item.meta && item.meta.indicator) || []" :key="item.name" class="item">
            <span class="name">{{ item.name }}</span>
            <span class="value">
              {{ item.value }}
              <span class="unit">{{ item.unit }}</span>
            </span>
          </div>
        </div>
      </router-link>
    </div>
    <div class="primal-nav">
      <router-link v-for="(item, i) in routes" :key="item.name" class="nav-item" :to="item.path" :style="posStyle(i)">
        {{ item.name }}
      </router-link>
      <div class="primal-nav-active-name">
        <div class="to-left" @click="toPrimalLeft" />
        <span>{{ primalNavActiveName }}</span>
        <div class="to-right" @click="toPrimalRight" />
      </div>
    </div>
    <div class="move-nav" v-if="secondaryNav.length > 6">
      <div class="to-left" v-if="secondNavStart > 0" @click="toSecondaryLeft" />
      <div class="to-right" v-if="secondNavStart < secondaryNav.length - 6" @click="toSecondaryRight" />
    </div>
  </div>
</template>
<script>
import routes from '@/config/routes';

export default {
  data() {
    return {
      routes: [...routes],
      secondNavStart: 0,
    };
  },
  computed: {
    primalNavActiveName() {
      return this.$route.matched?.[0]?.name || '';
    },
    secondaryNav() {
      console.log(this.routes);
      console.log(this.primalNavActiveName);
      const matched = this.routes.find((d) => d.name === this.primalNavActiveName);
      return matched?.children || [];
    },
    leftSecondaryNav() {
      const len = Math.min(this.secondaryNav.length / 2, 3);
      const start = this.secondNavStart;
      return this.secondaryNav.slice(start, start + len);
    },
    rightSecondaryNav() {
      const len = Math.min(this.secondaryNav.length / 2, 3);
      const start = this.secondNavStart + len;
      return this.secondaryNav.slice(start, start + len);
    },
    activePrimalIndex() {
      return this.routes.findIndex((d) => d.name === this.primalNavActiveName);
    },
  },
  watch: {
    primalNavActiveName() {
      this.secondNavStart = 0;
    },
  },
  methods: {
    toPrimalLeft() {
      const nextIndex = (this.routes.length + this.activePrimalIndex - 1) % this.routes.length;
      this.$router.push(this.routes[nextIndex].path);
    },
    toPrimalRight() {
      const nextIndex = (this.activePrimalIndex + 1) % this.routes.length;
      this.$router.push(this.routes[nextIndex].path);
    },
    toSecondaryLeft() {
      this.secondNavStart = Math.max(0, this.secondNavStart - 1);
    },
    toSecondaryRight() {
      const max = Math.max(this.secondaryNav.length - 6, 0);
      this.secondNavStart = Math.min(max, this.secondNavStart + 1);
    },
    posStyle(i) {
      const pos = [
        { top: '8rem', left: '75rem' },
        { top: '12rem', left: '111rem' },
        { top: '16rem', left: '146rem' },
        { top: '20rem', left: '181rem', opacity: 0 },
        { top: '16rem', left: '75rem', opacity: 0 },
        { top: '20rem', left: '-30rem', opacity: 0 },
        { top: '16rem', left: '5rem' },
        { top: '12rem', left: '40rem' },
      ];
      const len = pos.length;
      return pos[(len + i - this.activePrimalIndex) % len];
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
  // height: 144rem;
  height: 72rem;
  flex: none;
  background: url('./nav-bg.png') no-repeat;
  background-size: 576rem 73rem;
  background-position: 0 0;
}
.move-nav {
  .to-left {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 5rem;
    height: 52.5rem;
    background-image: url('./to-left.png');
    background-size: 100% 100%;
    cursor: pointer;
    transition: width 0.3s;
    &:hover {
      width: 36.7rem;
    }
  }
  .to-right {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 5rem;
    height: 52.5rem;
    background-image: url('./to-right.png');
    background-size: 100% 100%;
    cursor: pointer;
    transition: width 0.3s;
    &:hover {
      width: 36.7rem;
    }
  }
}
.secondary-nav {
  position: absolute;
  top: 22rem;
  width: 200rem;
  display: flex;
  justify-content: center;
  .nav-item {
    flex: none;
    width: 72.2rem;
    height: 42.1rem;
    background-size: 100% 100%;
    margin-right: -8rem;
    text-decoration: none;
    display: block;
    .nav-name {
      display: block;
      text-decoration: none;
      background-image: linear-gradient(160deg, #fff 0%, #26c4bf 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 4.5rem;
      margin: 2rem 9rem;
      letter-spacing: 3px;
    }
    .indicators {
      margin-top: 7rem;
      .item {
        .name {
          font-size: 3.4rem;
          color: rgb(130, 226, 228);
          position: relative;
          max-width: 25rem;
          // white-space: break-spaces;
          white-space: break-spaces;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          // white-space: nowrap;
          &::before {
            position: absolute;
            content: ' ';
            top: 50%;
            left: -4rem;
            width: 2rem;
            height: 2rem;
            transform: translate(-50%, -50%);
            padding: 0.5rem;
            border-radius: 50%;
            background: #26c4bf;
            background-clip: content-box;
            border: 1px solid #26c4bf;
          }
        }
        .value {
          font-size: 3.4rem;
          font-family: 'Oswald';
          color: rgb(255, 255, 255);
          padding-left: 4rem;
        }
        .unit {
          font-size: 2.3rem;
          color: rgb(232, 233, 233);
          font-weight: bold;
        }
      }
    }
  }
}
.left-secondary-nav {
  left: 5rem;
  .nav-item {
    background-image: url('./secondary-left-normal.png');
    &.router-link-active {
      background-image: url('./secondary-left-active.png');
    }
    &:nth-child(1) {
      transform: translateY(2rem);
    }
    &:nth-child(2) {
      transform: translateY(1rem);
    }
    .nav-name {
      transform: skew(0deg, -4deg);
      text-align: left;
    }
    .indicators {
      transform: skew(0deg, -4deg);
      .item {
        padding: 0rem 0 2rem 15rem;
      }
    }
  }
}
.right-secondary-nav {
  right: 11rem;
  .nav-item {
    background-image: url('./secondary-right-normal.png');
    &.router-link-active {
      background-image: url('./secondary-right-active.png');
    }
    &:nth-child(3) {
      transform: translateY(2rem);
    }
    &:nth-child(2) {
      transform: translateY(1rem);
    }
    .nav-name {
      transform: skew(0deg, 4deg);
      text-align: right;
    }
    .indicators {
      transform: skew(0deg, 4deg);
      .item {
        padding: 0rem 5rem 2rem 22rem;
        // text-align: right;
        .name {
          font-size: 3.4rem;
          color: rgb(130, 226, 228);
        }
        .value {
          font-size: 3.4rem;
          font-family: 'Oswald';
          color: rgb(255, 255, 255);
          padding-left: 4rem;
        }
        .unit {
          font-size: 2.3rem;
          color: rgb(232, 233, 233);
          font-weight: bold;
        }
      }
    }
  }
}
.primal-nav {
  // outline: 1px solid red;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 180rem;
  height: 100%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  user-select: none;
  &::after {
    position: absolute;
    content: ' ';
    width: 36.6rem;
    height: 6.5rem;
    top: 55rem;
    left: 72rem;
    background: url('./primal-tip.png') no-repeat;
    background-size: 100% 100%;
  }
  .nav-item {
    position: absolute;
    width: 29.5rem;
    height: 8.5rem;
    line-height: 8.5rem;
    text-align: center;
    background-image: url('./primal-normal.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size: 4rem;
    font-family: 'Source Han Sans CN';
    color: rgba(178, 250, 255, 0.6);
    text-decoration: none;
    z-index: 10;
    transition: all 300ms;
    &.router-link-active {
      background-image: url('./primal-active.png');
      color: rgb(178, 250, 255);
      text-shadow: 0 0 2px;
    }
  }
}
.primal-nav-active-name {
  position: absolute;
  top: 20rem;
  left: 10rem;
  width: 159.8rem;
  height: 33.9rem;
  text-align: center;
  line-height: 53rem;
  letter-spacing: 1rem;
  background: url('./primal-title.png') no-repeat;
  background-size: 100% 100%;
  background-position: center center;
  font-size: 5.6rem;
  // outline: 1px solid red;
  .to-left {
    position: absolute;
    width: 12rem;
    height: 13rem;
    bottom: 2rem;
    left: 13rem;
    cursor: pointer;
  }
  .to-right {
    position: absolute;
    width: 12rem;
    height: 13rem;
    bottom: 2rem;
    right: 13rem;
    cursor: pointer;
  }
  span {
    background-image: linear-gradient(160deg, #fff 0%, #26c4bf 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
}
</style>
