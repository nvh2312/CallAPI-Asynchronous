let arr = [];
let arr_dis =[];
let arr_ward =[];
let prov='',dist='',ward='';
const postApi = 'https://provinces.open-api.vn/api/?depth=3';
fetch(postApi)
  .then(response => response.json())
  .then(json => {
    arr=json;
    $('#exampleFormControlSelect1').append('<option selected disabled hidden></option>');
    json.forEach((value,index) => {
        $('#exampleFormControlSelect1').append('<option value='+ index +'>'+value.name+'</option>');
    });
    return json;
  })

function changed_Province(item){
    $('#exampleFormControlSelect2').empty();
    $('#exampleFormControlSelect3').empty();
    $('#exampleFormControlSelect2').append('<option selected disabled hidden></option>');
    $('#exampleFormControlSelect2').prop('disabled', false);
    $('#exampleFormControlSelect2')[0].style.cursor = "pointer";
    $('#exampleFormControlSelect3')[0].style.cursor = "no-drop";
    $('#exampleFormControlSelect3').prop('disabled', true);
    prov= $('#exampleFormControlSelect1').val();
    $('#addr').val(arr[prov].name); 
    arr_dis = arr[item.value].districts;
    arr_dis.forEach((value,index) => {
        $('#exampleFormControlSelect2').append('<option value="'+ index +'">'+value.name+'</option>');
    });
    
}
function changed_District(item){
    $('#exampleFormControlSelect3').empty();
    $('#exampleFormControlSelect3').append('<option selected disabled hidden></option>');
    $('#exampleFormControlSelect3').prop('disabled', false);
    $('#exampleFormControlSelect3')[0].style.cursor = "pointer";
    prov= $('#exampleFormControlSelect1').val();
    dist= $('#exampleFormControlSelect2').val();
    $('#addr').val(arr[prov].name + ', ' + arr_dis[dist].name); 
    arr_ward = arr_dis[item.value].wards;
    arr_ward.forEach((value,index) => {
        $('#exampleFormControlSelect3').append('<option value="'+ index +'">'+value.name+'</option>');
    });
}

function changed_Ward(item){
    prov= $('#exampleFormControlSelect1').val();
    dist= $('#exampleFormControlSelect2').val();
    ward =$('#exampleFormControlSelect3').val();
    $('#addr').val(arr[prov].name + ', ' + arr_dis[dist].name + ', ' + arr_ward[ward].name); 
}
  
