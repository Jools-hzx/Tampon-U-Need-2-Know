<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h4>Title: <span>{{ review.title }}</span></h4>
      </div>
      <el-divider />
      <span>Content:</span>
      <div v-html="review.content"></div>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      review: {
        title: '',
        content: ''
      }
    };
  },
  created() {
    this.fetchReview();
  },
  methods: {
    fetchReview() {
      const fileIndex = Math.floor(Math.random() * 565) + 1; // 生成1到565的随机数
      axios.get(`/Tampon-U-Need-2-Know/reviews/reviews-${fileIndex}.json`)
        .then(response => {
          this.review = response.data;
        })
        .catch(error => {
          console.error('Error fetching review:', error);
        });
    }
  }
};
</script>