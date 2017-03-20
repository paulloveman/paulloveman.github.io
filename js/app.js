'use strict';

var imagesArray = [{
  imageSrc: 'images/IMG_5855_crop02.jpg',
  imageDsc: 'Ottoman with variation'
}, {
  imageSrc: 'images/IMG_5856_crop02.jpg',
  imageDsc: 'Gored single jersey'
}, {
  imageSrc: 'images/IMG_5857_crop02.jpg',
  imageDsc: 'Single-needle and multi-needle increases and decreases'
}, {
  imageSrc: 'images/IMG_5858_crop02.jpg',
  imageDsc: 'Pointelle and bubbles'
}, {
  imageSrc: 'images/IMG_5859_crop02.jpg',
  imageDsc: 'Single-bed and double-bed tuck stitch techniques'
}, {
  imageSrc: 'images/IMG_5860_crop02.jpg',
  imageDsc: 'One 3x3 cable; two 1x1 cables'
}, {
  imageSrc: 'images/IMG_5861_crop02.jpg',
  imageDsc: 'Linked jersey panels'
}];

Vue.component('gallery-list', {
  props: ['initialCount'],
  template: '<div><ul><li v-for="item in items"> \
<div class="center-dsc"> \
<p class="tag">{{ item.imageDsc }}</p> \
<p><picture><img :src="item.imageSrc"></picture></p> \
</div> \
</li></ul></div>',
  data: function data() {
    return {
      items: imagesArray
    };
  },
  mounted: function mounted() {
    //console.log("gallery-list mounted");
  }
});

Vue.component('gallery-carousel', {
  props: ['initialCount'],
  template: '<div class="main-carousel"> \
<div class="carousel-cell" v-for="item in items"> \
<div class="center-dsc"> \
<p class="tag">{{ item.imageDsc }}</p> \
<p><picture><img :src="item.imageSrc"></picture></p> \
</div> \
</div></div>',
  data: function data() {
    return {
      items: imagesArray
    };
  },
  mounted: function mounted() {
    new Flickity('.main-carousel', {
      wrapAround: true
    });
    //console.log("gallery-carousel mounted");
  }
});

new Vue({
  el: '#root',
  data: function data() {
    return {
      msg: '',
      windowWidth: 0,
      windowHeight: 0,
      displayAsList: true
    };
  },
  computed: {
    classObject: function classObject() {
      return {
        'is-small': this.windowWidth < 600
      };
    },
    classObjectNavName: function classObjectNavName() {
      return {
        /*'is-small': this.windowWidth < 600,*/
        'is-nav-name': this.windowWidth >= 600,
        'is-nav-name-mobile': this.windowWidth < 600
      };
    }
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth);
      window.addEventListener('resize', this.getWindowHeight);

      //Init
      this.getWindowWidth();
      this.getWindowHeight();
    });
  },
  methods: {
    getWindowWidth: function getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
    getWindowHeight: function getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight;
    },

    setDisplayAsList: function setDisplayAsList() {
      this.displayAsList = true;
    },
    setDisplayAsCarousel: function setDisplayAsCarousel() {
      this.displayAsList = false;
    }
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
    window.removeEventListener('resize', this.getWindowHeight);
  }
});

/*
{{ windowWidth }}
{{ windowHeight }}
http://www.metmuseum.org/toah/images/hb/hb_1992.391.jpg
https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js
*/