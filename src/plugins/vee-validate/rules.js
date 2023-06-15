import { defineRule } from "vee-validate";
import { required, alpha_num } from "@vee-validate/rules";

defineRule('required', required);
defineRule('alpha_num', alpha_num);


// 帳號驗證
defineRule('accountRule', (value, target, ctx) => {
    if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{5,20}$/.test(value)) {
        return `${ctx.field}格式錯誤`;
    }
    return true;
});

// 密碼第一次驗證
defineRule('pwdRule', (value, target, ctx) => {
    if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(value)) {
        return `${ctx.field}格式錯誤`;
    }
    return true;
});

// 確認密碼驗證
defineRule('confirmed', (value, [target], ctx) => {
    if (value === ctx.form[target]) {
      return true;
    }
    return '確認密碼與密碼不符';
});

// 手機驗證
defineRule('mobile', (val, target, ctx) => {
    if (!/^09\d{8}$/.test(val)) {
      return `${ctx.field}有誤`;
    }
    return true;
});



