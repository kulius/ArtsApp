var db;   // 建立全域變數
var db2;   // 建立全域變數
var usernumber;
var userpassword;


$(function()
{
	$("#page").bind("click",intomain); //登入
	/*
	dbCreate();	// 建立資料庫
	$("#login").bind("click",login); //登入
	$("#out").bind("click",out); //登出
	$("#leaveout").bind("click",out); //登出
	$("#receiveout").bind("click",out); //登出
	$("#receiveout2").bind("click",out); //登出
	$("#home").bind("pageshow", homeread);      // 將 title 欄位資料加入 ListView 清單
	$("#leave").bind("pageshow", leaveread);      // 將 title 欄位資料加入 ListView 清單
	$("#leave_insert").bind("click",leave_insert); //新增
	$("#leave_edit").bind("click",leave_edit); //編輯
	$("#leave_sent").bind("click",leave_sent); //送出簽核
	$("#leave_delete").bind("click",leave_delete); //刪除
	$("#leave_again_delete").bind("click",leave_delete); //刪除
	$("#receive").bind("pageshow", receiveread);
	$("#receive_sent").bind("click",receive_sent); //送出簽核
	$("#receive_back").bind("click",receive_back); //送出簽核
	$("#receive2").bind("pageshow", receiveread2);
	$("#receive2_sent").bind("click",receive2_sent); //送出簽核
	$("#receive2_back").bind("click",receive2_back); //送出簽
	$("#btnDrop").bind("click",dbDrop);     // 刪除資料表
	*/
});

function intomain() 
{ // 顯示操作訊息
	$.mobile.changePage("#mainpage");
}
