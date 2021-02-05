<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item v-for="(item,index) of timeline" :key="index" :timestamp="item.timestamp" placement="top">
        <el-card>
          <h4>{{ item.title }}</h4>
          <p>{{ item.content }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeline: [
        {
          timestamp: '1976/04/01',
          title: '苹果公司创立',
          content: '苹果公司创立于1976年4月1日'
        },
        {
          timestamp: '1976/04/01',
          title: '苹果公司创立',
          content: '苹果公司创立于1976年4月1日'
        }
      ]
    }
  }
}
</script>
