const serverPermission:{
  [key:string]: string
} = {
	menu_zbzs: 'menu_zbzs',//菜单_战备值守code
	zbzs_zbdj: 'menu_zbzs_zbdj',//战备值守_战备等级code
	zbzs_jqdj: 'menu_zbzs_jqtj',//战备值守_警情等级code
	zbzs_yjll: 'menu_zbzs_yjll',//战备值守_应急力量code
	yjll_xfz: 'menu_zbzs_yjll_xfz',//应急力量_消防站执勤状态统计
	yjll_ry: 'menu_zbzs_yjll_ry',//应急力量_人员站执勤状态统计
	yjll_cl: 'menu_zbzs_yjll_cl',//应急力量_车辆站执勤状态统计
	zbzs_drzb: 'menu_zbzs_zrzb',//战备值守_当日值班code
	zbzs_sxlb: 'menu_zbzs_sxlb',//战备值守_事项列表code
	sxlb_zysx: 'menu_zbzs_sxlb_zysx',//事项列表_重要事项code
	sxlb_xxjb: 'menu_zbzs_sxlb_xxjb',//事项列表_信息接报code
	sxlb_gzrw: 'menu_zbzs_sxlb_gzrw',//事项列表_工作任务code
	sxlb_zhyj: 'menu_zbzs_sxlb_zhyj',//事项列表_灾害预警code

	menu_yjll: 'menu_yjll',//菜单_应急力量code
	yjll_zqtj: 'menu_yjll_zqtj',//应急力量_执勤统计code
	zqtj_xfz: 'menu_yjll_zqtj_xfz',//应急力量_消防站执勤状态统计
	zqtj_ry: 'menu_yjll_zqtj_ry',//应急力量_人员站执勤状态统计
	zqtj_cl: 'menu_yjll_zqtj_cl',//应急力量_车辆站执勤状态统计
	yjll_yjdt: 'menu_yjll_yjdt',//应急力量_应急地图code

	menu_rhjcIndex: 'menu_rhjcIndex',//菜单_融合监测首页code
	rhjcIndex_wbjc: 'menu_rhjcIndex_wbjc',//融合监测首页_外部监测code
	rhjcIndex_nbjc: 'menu_rhjcIndex_nbjc',//融合监测首页_内部监测code
	nbjc_zqtj: 'menu_rhjcIndex_nbjc_zqtj',//内部监测_执勤统计code
	zqtj_clzq: 'menu_rhjcIndex_nbjc_zqtj_clzq',//执勤统计_车辆执勤统计code
	zqtj_cllx: 'menu_rhjcIndex_nbjc_zqtj_cllx',//执勤统计_车辆类型统计code
	zqtj_czyj: 'menu_rhjcIndex_nbjc_zqtj_czyj',//执勤统计_车载药剂统计code
	nbjc_jcdt: 'menu_rhjcIndex_nbjc_jcdt',//内部监测_监测地图code


	menu_rhjc: 'menu_rhjc',//菜单_融合监测code
	rhjc_wbjc: 'menu_rhjc_wbjc',//融合监测_外部监测code
	wbjc_yqjc: 'menu_rhjc_wbjc_yqjc',//融合监测_外部监测_舆情监测code
	wbjc_zqyjjc: 'menu_rhjc_wbjc_zqyjjc',//融合监测_外部监测_灾情预警监测code
	wbjc_sslwjcpt: 'menu_rhjc_wbjc_sslwjcpt',//融合监测_外部监测_设施联网监测平台code
	wbjc_sljc: 'menu_rhjc_wbjc_sljc',//融合监测_外部监测_森林监测code
	wbjc_szjc: 'menu_rhjc_wbjc_szjc',//融合监测_外部监测_水质监测code
	wbjc_tqjc: 'menu_rhjc_wbjc_tqjc',//融合监测_外部监测_天气监测code
	wbjc_sqjc: 'menu_rhjc_wbjc_sqjc',//融合监测_外部监测_水情监测code
	wbjc_dzjc: 'menu_rhjc_wbjc_dzjc',//融合监测_外部监测_地质监测code
	wbjc_dscbj: 'menu_rhjc_wbjc_dscbj',//融合监测_外部监测_DCS报警code
	wbjc_rqjc: 'menu_rhjc_wbjc_rqjc',//融合监测_外部监测_燃气报警code
	wbjc_dqbj: 'menu_rhjc_wbjc_dqbj',//融合监测_外部监测_电气报警code
	wbjc_sjrhpt: 'menu_rhjc_wbjc_sjrhpt',//融合监测_外部监测_数据融合平台code

	rhjc_nbjc: 'menu_rhjc_nbjc',//融合监测_内部监测code
	nbjc_cljc: 'menu_rhjc_nbjc_cljc',//内部监测_车辆监测
	nbjc_ngjc: 'menu_rhjc_nbjc_ngjc',//内部监测_内攻监测
	nbjc_lldw: 'menu_rhjc_nbjc_lldw',//内部监测_力量定位

	menu_zddw: 'menu_zddw',//菜单_重点单位code

	menu_tzpt: 'menu_tzpt',//菜单_图综平台code

	menu_zhbjsl: 'menu_zhbjsl',//菜单_综合报警审理code
	zhbjsl_wxbj: 'menu_zhbjsl_wxbj',//综合报警审理_微信报警code
	zhbjsl_dxbj: 'menu_zhbjsl_dxbj',//综合报警审理_短信报警code
	zhbjsl_ssbj: 'menu_zhbjsl_ssbj',//综合报警审理_设施报警code
	zhbjsl_gwjk: 'menu_zhbjsl_gwjk',//综合报警审理_高位监控code

	menu_jqxx: 'menu_jqxx',//菜单_警情信息code
	jqxx_zqxx: 'menu_jqxx_zqxx',//警情信息_灾情信息code
	jqxx_cdll: 'menu_jqxx_cdll',//警情信息_出动力量code
	cdll_lltj: 'menu_jqxx_cdll_lltj',//出动力量_力量统计code
	cdll_dpll: 'menu_jqxx_cdll_dpll',//出动力量_调派力量code
	cdll_cdll: 'menu_jqxx_cdll_cdll',//出动力量_出动力量code
	cdll_zzzt: 'menu_jqxx_cdll_zzzt',//出动力量_作战状态code
	jqxx_zzws: 'menu_jqxx_zzws',//警情信息_作战文书code
	zzws_zzws: 'menu_jqxx_zzws_zzws',//作战文书_作战文书code
	zzws_fzxx: 'menu_jqxx_zzws_fzxx',//作战文书_辅助信息code
	zzws_gkxx: 'menu_jqxx_zzws_gkxx',//作战文书_管控信息code
	zzws_zzzh: 'menu_jqxx_zzws_zzzh',//作战文书_作战指挥code
	zzws_qt: 'menu_jqxx_zzws_qt',//作战文书_其他code
	jqxx_spxx: 'menu_jqxx_spxx',//警情信息_视频信息code
	spxx_spxx: 'menu_jqxx_spxx_spxx',//视频信息_视频信息code
	spxx_tkxx: 'menu_jqxx_spxx_tkxx',//视频信息_图库信息code

	menu_zbxx: 'menu_zbxx',//菜单_值班信息code

	menu_qhtb: 'menu_qhtb',//菜单_群呼通报code
	qhtb_lqbz: 'menu_qhtb_lqbz',//群呼通报_联勤保障code
	qhtb_lddw: 'menu_qhtb_lddw',//群呼通报_联动单位code
	qhtb_ldzj: 'menu_qhtb_ldzj',//群呼通报_联动专家code
	qhtb_dxdw: 'menu_qhtb_dxdw',//群呼通报_多行队伍code
	qhtb_qhtbws: 'menu_qhtb_qhtbws',//群呼通报_群呼通报文书code

	menu_alarmList: 'menu_alarmList',//警情列表

	menu_zzgk: 'menu_zzgk',//作战管控
	zzgk_zzgk: 'menu_zzgk_zzgk',//作战管控
	zzgk_gkfs: 'menu_zzgk_zzgk_gkfs',//管控发送
	zzgk_gknr: 'menu_zzgk_zzgk_gknr',//管控内容
	zzgk_gkxx: 'menu_zzgk_gkxx',//管控信息

	menu_zzfz: 'menu_zzfz',//作战辅助
	zzfz_zzfz: 'menu_zzfz_zzfz',//作战辅助
	zzfz_fzfs: 'menu_zzfz_zzfz_fzfs',//辅助发送
	zzfz_fznr: 'menu_zzfz_zzfz_fznr',//辅助内容
	zzfz_fzxx: 'menu_zzfz_fzxx',//辅助信息

	menu_dtp: 'menu_dtp',//地图屏

	menu_setting: 'menu_setting',//设置

	menu_paomadeng: 'menu_paomadeng',//跑马灯

	menu_yp: 'menu_yp',//信息圆盘
	yp_xx: 'menu_yp_xx',//信息发送
	yp_th: 'menu_yp_th',//5g通话
	yp_bh: 'menu_yp_bh',//态势标绘
	yp_hs: 'menu_yp_hs',//视频会商
	yp_zl: 'menu_yp_zl',//指令下达

	dataCenter_xtgl: 'dataCenter_xtgl',//系统管理
	xtgl_zzmcpz: 'dataCenter_xtgl_zzmcpz',//作战名称配置
	xtgl_zzztpz: 'dataCenter_xtgl_zzztpz',//作战状态配置
	xtgl_zdpz: 'dataCenter_xtgl_zdpz',//字典配置
	xtgl_zzfzgl: 'dataCenter_xtgl_zzfzgl',//作战辅助管理
	xtgl_khpzgl: 'dataCenter_xtgl_khpzgl',//考核配置管理
	dataCenter_pbgl: 'dataCenter_pbgl',//排班管理
	pbgl_ypb: 'dataCenter_pbgl_ypb',//月排班
	pbgl_ryzbpz: 'dataCenter_pbgl_ryzbpz',//人员值班配置
	dataCenter_sjwh: 'dataCenter_sjwh',//数据维护
	sjwh_yhgl: 'dataCenter_sjwh_yhgl',//用户管理
	sjwh_xfzgl: 'dataCenter_sjwh_xfzgl',//消防站管理
	sjwh_sbgl: 'dataCenter_sjwh_sbgl',//设备管理
	sjwh_zbsbgl: 'dataCenter_sjwh_zbsbgl',//直播设备管理
	sjwh_qjlrgl: 'dataCenter_sjwh_qjlrgl',//全景录入管理
	dataCenter_qhtb: 'dataCenter_qhtb',//群呼通报
	qhtb_lqbzdw: 'dataCenter_qhtb_lqbzdw',//联勤保障单位
	// qhtb_lddw:'dataCenter_qhtb_lddw',//联动单位
	// qhtb_ldzj:'dataCenter_qhtb_ldzj',//联动专家
	// qhtb_dxdw:'dataCenter_qhtb_dxdw',//多形队伍
	dataCenter_jqxx: 'dataCenter_jqxx',//警情信息
	jqxx_jqxx: 'dataCenter_jqxx_jqxx',//警情信息
	dataCenter_sygl: 'dataCenter_sygl',//水源管理
	sygl_xhs: 'dataCenter_sygl_xhs',//消火栓
	sygl_trsy: 'dataCenter_sygl_trsy',//天然水源
	dataCenter_zqll: 'dataCenter_zqll',//执勤力量
	zqll_rysj: 'dataCenter_zqll_rysj',//人员数据
	zqll_clsj: 'dataCenter_zqll_clsj',//车辆数据
	dataCenter_dwgl: 'dataCenter_dwgl',//单位管理
	dwgl_dwgl: 'dataCenter_dwgl_dwgl',//单位管理
	dataCenter_dwzdgl: 'dataCenter_dwzdgl',//定位终端管理
	dwzdgl_dwzdgl: 'dataCenter_dwzdgl_dwzdgl',//定位终端管理
}

const getCodeByName = (str:string)=>{
  for (let k in serverPermission) {
		if (k === str) {
			return serverPermission[k]
		}
	}
	return ''
}

export {
  getCodeByName
}
