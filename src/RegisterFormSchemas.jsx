import * as yup from 'yup'


export const RegsiterFormSchemas = yup.object().shape({
    email: yup.string().email('Bir email daxil edin').required("Bu hisse bos kecile bilmez"),
    age : yup.number().required("Bu hisse bos kecile bilmez").positive('Zehmet olmasa yasinizi duzgun qeyd edin').integer('Zehmet olmasa yasinzii tam eded olaraq qeyd edin'),
    password : yup.string().required('Bu hisse bos kecile bilmez'),
    confirmpassword : yup.string().required('Bu hisse bos kecile bilmez').oneOf([yup.ref('password', yup.password)], "Kod tekrari duzgun deyil  "),
    term : yup.boolean().required('Zehmet olmasa sertleri qebul etdiyviiz tesdiq edin')

})