<template>
	<div id="homeMain">
	    <!--  -->
	    <div class="data clearfix">
	      <el-row :gutter="30">
	        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
	          <div class="data-today">
	            <h4>
	              今日数据
	              <span>单位： 条</span>
	            </h4>
	            <el-row :gutter="30">
	              <el-col :span="8">
	                <div class="li one">
	                  <p>123973236</p>
	                  <span>发送总量</span>
	                </div>
	              </el-col>
	              <el-col :span="8">
	                <div class="li two">
	                  <p>123973236</p>
	                  <span>成功数</span>
	                </div>
	              </el-col>
	              <el-col :span="8">
	                <div class="li three">
	                  <p>123973236</p>
	                  <span>失败数</span>
	                </div>
	              </el-col>
	            </el-row>
	          </div>
	        </el-col>
	        <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
	          <div class="data-month">
	            <h4>
	              月数据
	              <span>单位： 条</span>
	            </h4>
	          </div>
	          <el-row :gutter="30">
	            <el-col :span="8">
	              <div class="li one">
	                <p>123973236</p>
	                <span>发送成功数</span>
	              </div>
	            </el-col>
	            <el-col :span="8">
	              <div class="li two">
	                <p>123973236</p>
	                <span>当月投诉率</span>
	              </div>
	            </el-col>
	            <el-col :span="8">
	              <div class="li three">
	                <p>123973236</p>
	                <span>通道投诉率</span>
	              </div>
	            </el-col>
	          </el-row>
	        </el-col>
	      </el-row>
	    </div>
	    <div class="chart">
	      <el-row :gutter="30">
	        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
	          <h4>审核待办</h4>
	          <div class="mes clearfix">
	            <div class="left">
	              <div class="my-chart" ref="myChart" style="width:100%;height:330px;"></div>
	              <ul class="clearfix">
	                <li>
	                  待处理短信总数
	                  <span>12987392</span>
	                </li>
	                <li>
	                  待处理移动短信
	                  <span>10000000</span>
	                </li>
	                <li>
	                  待处理联通短信
	                  <span>14936962</span>
	                </li>
	                <li>
	                  待处理电信短信
	                  <span>14936962</span>
	                </li>
	              </ul>
	            </div>
	            <div class="right">
	              <div class="sign">
	                <h4>待审核签名</h4>
	                <div class="box">
	                  <p>2</p>
	                  <span>待审核签名</span>
	                </div>
	              </div>
	              <div class="model">
	                <h4>待审核模板</h4>
	                <div class="box">
	                  <p>2</p>
	                  <span>待审核模板</span>
	                </div>
	              </div>
	            </div>
	          </div>
	        </el-col>
	        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
	          <div class="order-data">
	            <h4>开单数据</h4>
	            <ul>
	              <li>
	                <p>今日新开户</p>
	                <span>New accounts open today</span>
	                <strong>0</strong>
	              </li>
	              <li>
	                <p>今日续费户</p>
	                <span>Renewals today</span>
	                <strong>1</strong>
	              </li>
	              <li>
	                <p>今日进款额</p>
	                <span>Amount of money entered today</span>
	                <strong>10909109</strong>
	              </li>
	              <li>
	                <p>当月开户排行</p>
	                <span>Monthly account opening</span>
	                <strong>10</strong>
	              </li>
	              <li>
	                <p>当月进款排行</p>
	                <span>Monthly income ranking</span>
	                <strong>19</strong>
	              </li>
	            </ul>
	          </div>
	        </el-col>
	      </el-row>
	    </div>
	  </div>
	</template>
	
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Login extends Vue {}
</script>

<style lang="less">
#homeMain {
  // 数据部分
  .data {
    margin-bottom: 30px;
    h4 {
      font-size: 20px;
      color: #242a33;
      font-weight: normal;
      margin-bottom: 20px;
      span {
        float: right;
        font-size: 14px;
        color: #242a33;
        margin-right: 50px;
        line-height: 26px;
      }
    }
    .li {
      // width: 252px;
      height: 130px;
      border-radius: 5px;
      // float: left;
      background-repeat: no-repeat;
      background-position: right 20px bottom 20px;
      background-size: 30%;
      padding: 20px;
      box-sizing: border-box;
      p {
        font-size: 26px;
        color: #fff;
        margin-bottom: 20px;
      }
      span {
        font-size: 14px;
        color: #fff;
      }
    }
    .li.one {
      background-color: #398bf7;
      // margin-right: 30px;
    }
    .li.two {
      background-color: #745af2;
      // margin-right: 30px;
    }
    .li.three {
      background-color: #26c6da;
    }
  }
  .chart {
    h4 {
      font-weight: normal;
      font-size: 20px;
    }
    .mes {
      margin-top: 20px;
      background-color: #fff;
      .left {
        float: left;
        width: 70%;
        padding-bottom: 10px;
        ul {
          // position: relative;
          li {
            box-sizing: border-box;
            float: left;
            width: 50%;
            padding-left: 10%;
            height: 40px;
            line-height: 45px;
            position: relative;
            span {
              margin-left: 30px;
              font-size: 20px;
              transition: all 1s;
              position: absolute;
              right: 10%;
            }
            span:hover {
              font-size: 24px;
              text-decoration: underline;
            }
          }
          li:nth-child(1) {
            span{
              color: #F53D55;
            }
          }
          li:nth-child(2) {
            span{
              color: #398BF7;
            }
          }
          li:nth-child(3) {
            span{
              color: #745AF2;
            }
          }
          li:nth-child(4) {
            span{
              color: #26C6DA;
            }
          }
        }
      }
      .right {
        // float: right;
        overflow: hidden;
        // width: 100%;
        border-left: 1px solid #efefef;
        .sign,
        .model {
          padding: 28px 0 40px 0;
          width: 100%;
          box-sizing: border-box;
          h4 {
            font-size: 18px;
            margin-bottom: 40px;
            margin-left: 20px;
          }
          .box {
            width: 260px;
            height: 78px;
            margin: 0 auto;
            border-radius: 5px;
            background-color: #fff;
            padding: 15px 30px;
            box-sizing: border-box;
            p {
              font-size: 30px;
              color: #333;
              line-height: 30px;
            }
          }
          .box:hover {
            box-shadow: -2px 2px 4px rgba(22, 35, 102, 0.13),
              0 0 1px rgba(22, 35, 102, 0.13);
          }
        }
        .model {
          border-top: 1px solid #efefef;
         
        }
      }
    }
  }
  .order-data {
    h4 {
      margin-bottom: 20px;
    }
    ul {
      padding: 20px 20px 33px 20px;
      background-color: #fff;
      li {
        border-bottom: 1px solid #e9f1f3;
        position: relative;
        p {
          font-size: 16px;
          // line-height: 52px;
          margin-top: 20px;
        }
        span {
          display: inline-block;
          font-size: 12px;
          // line-height: 28px;
          margin-bottom: 18px;
          margin-top: 5px;
        }
        strong {
          float: left;
          font-size: 24px;
          font-weight: normal;
          position: absolute;
          left: 73%;
          top: 0;
        }
      }
      li:first-child {
        p {
          margin-top: 0;
        }
      }
      li:last-child {
        border-bottom: none;
        span {
          margin-bottom: 2px;
        }
      }
    }
  }
  @media screen and (max-width: 1499px) {
    .data .el-row {
      .el-col-24 {
        width: 100%;
      }
    }
    .data-month {
      margin-top: 20px;
    }
    .chart .el-row {
      .el-col-24 {
        width: 100%;
      }
    }
    .order-data {
      margin-top: 20px;
      ul li strong {
        left: 85%;
        font-size: 26px;
      }
    }
  }
}
</style>