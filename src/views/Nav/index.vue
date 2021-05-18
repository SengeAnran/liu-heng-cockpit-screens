<template>
  <div class="nav">
    <div class="left-secondary-nav secondary-nav">
      <div class="nav-item" v-for="item in leftSecondaryNav" :key="item.name">
        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
        <div class="indicators">
          <div v-for="i in 3" :key="i" class="item">
            <span class="name">核心指标</span>
            <span class="value">
              0000.00
              <span class="unit">单位</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="right-secondary-nav secondary-nav">
      <div class="nav-item" v-for="item in rightSecondaryNav" :key="item.name">
        <router-link :to="{ name: item.name }">{{ item.name }}</router-link>
        <div class="indicators">
          <div v-for="i in 3" :key="i" class="item">
            <span class="name">核心指标</span>
            <span class="value">
              0000.00
              <span class="unit">单位</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="primal-nav">
      <router-link
        v-for="item in routes"
        :key="item.name" class="nav-item"
        :to="item.path"
      >
        {{ item.name }}
      </router-link>
      <div class="primal-nav-active-name">
        <span>{{ primalNavActiveName }}</span>
      </div>
    </div>
    <div class="move-nav" v-if="secondaryNav.length > 6">
      <div
        class="to-left"
        v-if="secondNavStart > 0"
        @click="toLeft"
      />
      <div
        class="to-right"
        v-if="secondNavStart < secondaryNav.length - 6"
        @click="toRight"
      />
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
  },
  watch: {
    secondaryNav() {
      this.secondNavStart = 0;
    },
  },
  methods: {
    toLeft() {
      this.secondNavStart = Math.max(0, this.secondNavStart - 1);
    },
    toRight() {
      const max = Math.max(this.secondaryNav.length - 6, 0);
      this.secondNavStart = Math.min(max, this.secondNavStart + 1);
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
  height: 144rem;
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
    a {
      display: block;
      text-decoration: none;
      background-image: linear-gradient(160deg,#fff 0%, #26c4bf 100%);
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
          font-family: "Oswald";
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
    &:nth-child(1) {
      transform: translateY(2rem);
    }
    &:nth-child(2) {
      transform: translateY(1rem);
    }
    a {
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
    &:nth-child(3) {
      transform: translateY(2rem);
    }
    &:nth-child(2) {
      transform: translateY(1rem);
    }
    a {
      transform: skew(0deg, 4deg);
      text-align: right;
    }
    .indicators {
      transform: skew(0deg, 4deg);
      .item {
        padding: 0rem 12rem 2rem;
        text-align: right;
        .name {
          font-size: 17px;
          color: rgb(130, 226, 228);
        }
        .value {
          font-size: 17px;
          font-family: "Oswald";
          color: rgb(255, 255, 255);
          font-weight: bold;
          padding-left: 4rem;
        }
        .unit {
          font-size: 11.254px;
          color: rgb(232, 233, 233);
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
    font-family: "Source Han Sans CN";
    color: rgba(178, 250, 255, 0.6);
    text-decoration: none;
    z-index: 10;
    &.router-link-active {
      background-image: url('./primal-active.png');
      color: rgb(178, 250, 255);
      text-shadow: 0 0 2px;
    }
    &:nth-child(1) {
      top: 8rem;
      left: 75rem;
    }
    &:nth-child(2) {
      top: 12rem;
      left: 40rem;
    }
    &:nth-child(3) {
      top: 16rem;
      left: 5rem;
    }
    &:nth-child(4) {
      top: 12rem;
      left: 111rem;
    }
    &:nth-child(5) {
      top: 16rem;
      left: 146rem;
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
  span {
    background-image: linear-gradient(160deg,#c5f8ff 0%, #26c4bf 100%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
}
</style>
