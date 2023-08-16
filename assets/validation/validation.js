var valid = true;
function kiemTraDuLieuRong(arrInput,arrNotiInput,nhanVien) {
    let valid = true;
    let valueGender = document.getElementsByName('gridRadios');
    for (let z = 0; z < arrInput.length; z++) {
        if (nhanVien[arrInput[z]] == '' ) {
            valid = valid && false;
            document.getElementById(arrNotiInput[z]).style.display = 'inline-block';
            document.getElementById(arrNotiInput[z]).innerHTML = 'Vui lòng nhập dữ liệu';
        } else {
            valid = valid && true;
            document.getElementById(arrNotiInput[z]).style.display = 'none';
            document.getElementById(arrNotiInput[z]).innerHTML = '';
        }
    };

    if (!valueGender[0].checked && !valueGender[1].checked ) {
            valid = valid && false;
            document.getElementById('tbGender').style.display = 'inline-block';
            document.getElementById('tbGender').innerHTML = 'Vui lòng chọn một dữ liệu';
    } 
    return valid;
}

function kiemTraEmail(valueEmail,idNoti) {
    var valid = true;
    var regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (valueEmail !== '') {
        if (!regexEmail.test(valueEmail)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Định dạng email không đúng';
        } 
    }
    return valid;
}

function kiemTraPass(valuePass,idNoti) {
    var valid = true;
    var regexPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])((?=.*\W)|(?=.*_))^[^ ]+$/;
    if (valuePass !== '') {
        if (valuePass.length < 6 || valuePass.length > 10) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Mật khẩu phải từ 6 đến 10 kí tự ';
        } else if (!regexPass.test(valuePass) ) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Mật khẩu phải có ít nhất 1 kí tự in hoa, 1 chữ số và 1 kí tự đặc biệt';
        } 
    }
    return valid;
}

function kiemTraPassConfirm(valuePassConfirm,valuePass,idNoti) {
    var valid = true;
    if (valuePassConfirm !== '' ) {
        if (valuePassConfirm !== valuePass) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Mật khẩu không trùng khớp';
        }
    }
    return valid;
}

function kiemTraName(valueName,idNoti) {
    var valid = true;
    var regexChu = /^[A-Za-z]*$/;
    if (valueName !== '') {
        if (!regexChu.test(valueName)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Tên chỉ có thể là chữ';
        } 
    }
    return valid;
}

function kiemTraPhone(valuePhone,idNoti) {
    var valid = true;
    var regexChu = /^\d+$/;
    if (valuePhone !== '') {
        if (!regexChu.test(valuePhone)) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Số điện thoại chỉ có thể là số';
        } else if (valuePhone.length != 10 || valuePhone[0] != 0 ) {
            valid = valid && false;
            document.getElementById(idNoti).style.display = 'inline-block';
            document.getElementById(idNoti).innerHTML = 'Số điện thoại không chính xác';
        }
    }
    return valid;
}