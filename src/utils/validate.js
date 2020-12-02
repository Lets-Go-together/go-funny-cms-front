export function  validatePhone(rule, value, callback){
    if (!value) {
      return callback(new Error('Please input the Phone'));
    }
    if(!(/^1[3456789]\d{9}$/.test(value))){ 
        return callback(new Error("手机号码不符合规范"));
    } 
    return callback();
};

export function  validatePassword(rule, value, callback){
    if(!value) {
        return callback();
    }

    if(value.length > 12 || value.length < 6) {
        return callback(new Error('密码限定6-12个字符串'));
    }
    return callback();
};

export function validateConfirmPassword(rule, value, callback){
    let pass = this.ruleForm.password
    
    if(pass !== value) {
        return callback(new Error('两次输入密码不一致'));
    }
    
    return callback()
};