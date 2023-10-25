// "https://tmjp.intra-mart-dev.tmj.cloud/im/forma/normal/view/regist_application_view/it_qowk_dwk?imfr_callback_path=bpm%2ftask%2flist&imfr_not_save_item_data=true&upp_taskId=8gz5z5ht8msb59w"

//imfr_insert_id=IMP_00099999&imfr_callback_path=home

// const url = window.location.href;

/*https://tmj01.intra-mart.tmj.cloud/im/forma/normal/view/refer_application_view/it_qowk_dwk?imfr_insert_id=IMP_00099999&imfr_callback_path=home*/

// const url = "https://tmjp.intra-mart-dev.tmj.cloud/im/forma/normal/view/regist_application_view/it_qowk_dwk?imfr_callback_path=bpm%2ftask%2flist&imfr_not_save_item_data=true&upp_taskId=8gz5z5ht8msb59w";

//this one
//https://test2.intra-mart-dev.tmj.cloud
// /im/forma/normal/view/refer_application_view/it_qowk_dwk?imfr_insert_id=8gw9il3jrf0649w&imfr_callback_path=home

//it_qowk_dqo
//it_qowk_dwk


// const org_url = window.location.origin;
// const app_view_url = "/im/forma/normal/view/refer_application_view/";
// const forma_name = "it_qowk_dqo";
// const record_num = 'IMP_'+ ('00000000' + Number(data["textbox_001"])).slice( -8);
// const insert_id = `?imfr_insert_id=${record_num}&imfr_callback_path=home`;
// const shareUrl = org_url + app_view_url + forma_name + insert_id;
// data["textbox_156"] = shareUrl;

const org_url = window.location.origin;
const app_view_url = "/im/forma/normal/view/refer_application_view/";
const forma_name = "it_qowk_dqo";
const record_num = 'IMP_'+ ('00000000' + Number(data["textbox_001"])).slice( -8);
const insert_id = `?imfr_insert_id=${record_num}&imfr_callback_path=home`;
const shareUrl = org_url + app_view_url + forma_name + insert_id;
data["textbox_156"] = shareUrl;

// document.querySelector('input[name="textbox_222"]').value = baseUrl;

// console.log("Base URL:", baseUrl);

// document.querySelector('input[name="textbox_222"]').value  = baseUrl;
