import {camelize} from 'humps'

export const  AdFields = [
    { 
        header: '花费', 
        accessor:'cost',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.cost!=='-')
        },
        switchSortBy:v=>`￥${v.cost}`
    },
    {
        header:'曝光', 
        accessor:'impression_count',
        update:function(fetchData,data){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.impressionCount!=='-')
        },
        switchSortBy:v=>v.impressionCount  
    },
    { 
        header: '点击', 
        accessor:'click_count',
        update:function(fetchData,data){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.clickCount!=='-')
        },
        switchSortBy:v=>`￥${v.clickCount}`
    },
    { 
        header: '点击均价', 
        accessor:'cost_per_click',
        update:function(fetchData,data){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.costPerClick!=='-')
        },
        switchSortBy:v=>`￥${v.costPerClick}`
    },
    {
        header:'点击率',
        accessor:'click_rate',
        update:function(fetchData,data){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.clickRate!=='-')
        },
        switchSortBy:v=>v.clickRate 
     },
    {
        header:'下载', 
        accessor:'download_count',
        update:function(fetchData,data){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.downloadCount!=='-')
        },
        switchSortBy:v=>v.downloadCount         
    },
    {
        header:'下载成本', 
        accessor:'cost_per_download',
        update:function(fetchData,data){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.costPerDownload!=='-')
        },
        switchSortBy:v=>`￥${v.costPerDownload}`               
    },
    {
        header:'曝光下载率', 
        accessor:'impression_download_rate',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.impressionDownloadRate!=='-')
        },
        switchSortBy:v=>v.impressionDownloadRate                 
    },
    {
        header:'激活', 
        accessor:'install_count',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.installCount!=='-')
        },
        switchSortBy:v=>v.installCount                 
    },
    {
        header:'激活成本', 
        accessor:'cost_per_install',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.costPerInstall!=='-')
        },
        switchSortBy:v=>`￥${v.costPerInstall}`                   
    },
    {
        header:'激活率', 
        accessor:'install_rate',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.installRate!=='-')
        },
        switchSortBy:v=>v.installRate                 
    },
   /** {
        header:'注册', 
        accessor:'registration_count',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.registrationCount!=='-')
        },
        switchSortBy:v=>v.registrationCount                 
    },
    {
        header:'注册成本', 
        accessor:'cost_per_registration',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.costPerRegistration!=='-')
        },
        switchSortBy:v=>`￥${v.costPerRegistration}`                  
    },
    {
        header:'注册率', 
        accessor:'registration_rate',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.registrationRate!=='-')
        },
        switchSortBy:v=>v.registrationRate                 
    },
    {
        header:'完件', 
        accessor:'register_complete_count',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.registerCompleteCount!=='-')
        },
        switchSortBy:v=>v.registerCompleteCount                 
    },
    {
        header:'完件率', 
        accessor:'register_complete_rate',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.registerCompleteRate!=='-')
        },
        switchSortBy:v=>v.registerCompleteRate                 
    },
    {
        header:'授信', 
        accessor:'credit_count',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.creditCount!=='-')
        },
        switchSortBy:v=>v.creditCount                 
    },
    {
        header:'授信成本', 
        accessor:'cost_per_credit',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.costPerCredit!=='-')
        },
        switchSortBy:v=>`￥${v.costPerCredit}`              
    },
    { 
        header:'授信率', 
        accessor:'credit_rate',
        update:function(fetchData){
            fetchData(this.accessor)
        },
        getData:(data)=>{
            return data&&data.list.length&&data.list.filter(v=>v.creditRate!=='-')
        },
        switchSortBy:v=>v.creditRate                 
    }**/
]


const baseColumns = AdFields.map(v=>({Header:v.header,accessor:camelize(v.accessor)}))

export const reportColumn = [
    {accessor : 'date', Header :'时间'},...baseColumns
]