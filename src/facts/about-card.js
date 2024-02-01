import about1 from "@components/asets/about1.svg"
import about2 from "@components/asets/about2.svg"
import about3 from "@components/asets/about3.svg"
import about4 from "@components/asets/about4.svg"


const AboutCardFacts = [
    {
        id:1,
        status:"Фермерские продукты",
        isStatus:true,
        imgUrl: about1,
        title:"Еда намного вкуснее",
        text:"Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
    },
    {
        id:2,
        status:"Магазинные продукты",
        isStatus:false,
        imgUrl: about2,
        title:"Просроченные продукты",
        text:"Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
    },
    {
        id:3,
        status:"Фермерские продукты",
        isStatus:true,
        imgUrl: about3,
        title:"Натуральные продукты",
        text:"Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    },
    {
        id:4,
        status:"Магазинные продукты",
        isStatus:false,
        imgUrl: about4,
        title:"Некачественное мясо",
        text:"Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
    }
]

export default AboutCardFacts;