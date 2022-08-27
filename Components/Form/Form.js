import { useState } from 'react';
import styles from '../../styles/Form.module.css';
import { useSession } from 'next-auth/react';
import {addDoc , collection} from 'firebase/firestore'
import {db} from '../../firebase'
import img from '../../Images/WhatsApp Image 2022-08-26 at 9.08.47 PM.jpeg'
import Image from 'next/image';
export default function Form() {
    const[type , setType] =useState("")
    const[person , setPerson] =useState("")
    const[ownerName , setOwnerName] =useState("")
    const[tenantName , setTenantName] =useState("")
    const[ownerId , setOwnerId] =useState("")
    const[ownerPhone , setOwnerPhone] =useState("")
    const[ownerDate , setOwnerDate] =useState("")
    const[tenantId , setTenantId] =useState("")
    const[tenantPhone , setTenantPhone] =useState("")
    const[tenantDate , setTenantDate] =useState("")
    const[cost , setCost] =useState("")
    const[costDate , setCostDate] =useState("")
    const[costWay , setCostWay] =useState("")
    const[houseNum , setHouseNum] =useState("")
    const[houseDate , setHouseDate] =useState("")
    const[floorsNum , setFloorsNum] =useState("")
    const[floor , setFloor] =useState("")
    const[apartmentNum , setApartmentNum] =useState("")
    const[elevator , setElevator] =useState("")
    const[roomsNum , setRoomsNum] =useState("")
    const[countryName , setCountryName] =useState("")
    const[cityName , setCityName] =useState("")
    const[ownerAdress , setOwnerAdress] =useState("")
    const[tenantAdress , setTenantAdress] =useState("")
    const {data:session} = useSession();
    const sendOrder = async ()=>{
        const docRef = await addDoc(collection(db , "orders"),{
            type,
            person,
            ownerName,
            ownerId,
            ownerDate,
            ownerPhone,
            tenantName,
            tenantId,
            tenantDate,
            tenantPhone,
            cost,
            costDate,
            costWay,
            houseNum,
            houseDate,
            floor,
            floorsNum,
            apartmentNum,
            elevator,
            countryName,
            cityName,
        })
    }
  return (
    <div>
         <Image src={img} alt='logo' width='120px' height="120px"  style={{marginLeft:"20px" , marginTop:"20px"}} /> 
         <img src="https://jawharatarabnews.net/assets/2022-04-17/images/73462_1_1650225937.png" alt="logo" className={styles.img2}   /> 
        <div className={styles.form}>
            <form className="row g-3">
                <h1>املأَ البيانات الاتية</h1>
                <div className="col-md-3">
                    <label htmlFor="validationDefault24" className="form-label">نوع الطلب </label>
                    <select className="form-select" id="validationDefault24" onChange={(e)=>setType(e.target.value)} required>
                    <option selected disabled >اختر...</option>
                    <option>طلب نقل ملكية</option>
                    <option>تسجيل عقد جديد</option>
                    <option>طلب تعديل بيانات</option>
                    <option>طلب الغاء عقد</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault25" className="form-label">هل انت المالك ام المستأجر ؟</label>
                    <select className="form-select" id="validationDefault25" onChange={(e)=>setPerson(e.target.value)} required>
                    <option selected disabled >اختر...</option>
                    <option>المالك</option>
                    <option>المستأجر</option>
                    </select>
                </div>
                <h2>معلومات المالك</h2>
                <div className="col-md-4">
                    <label htmlFor="validationDefault01" className="form-label">الاسم</label>
                    <input type="text" value={ownerName} onChange={(e)=>setOwnerName(e.target.value)} className="form-control" id="validationDefault01"  placeholder='من فضلك ادخل الاسم كما بالبطاقة'/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault02" className="form-label">هوية المالك</label>
                    <input type="number" value={ownerId} onChange={(e)=>setOwnerId(e.target.value)} className="form-control" id="validationDefault02" placeholder='من افضلك ادخل الرقم القومي' required/>
                </div>
                <h5></h5>
                <div className="col-md-4">
                    <label htmlFor="validationDefaultPhone" className="form-label">رقم الجوال للمالك</label>
                    <input type="number" value={ownerPhone} onChange={(e)=>setOwnerPhone(e.target.value)} className="form-control" id="validationDefaultPhone" placeholder='ادخل الرقم' aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault03" className="form-label">عيد ميلاد المالك</label>
                    <input type="date" value={ownerDate} onChange={(e)=>setOwnerDate(e.target.value)} className="form-control" id="validationDefault03" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault30" className="form-label">العنوان</label>
                    <input type="text" value={ownerAdress} onChange={(e)=>setOwnerAdress(e.target.value)} className="form-control" id="validationDefault30"  placeholder='ادخل عنوان المالك'/>
                </div>
                <h2>معلومات المستأجر</h2>
                <div className="col-md-4">
                    <label htmlFor="validationDefault4" className="form-label">الاسم</label>
                    <input type="text" value={tenantName} onChange={(e)=>setTenantName(e.target.value)} className="form-control" id="validationDefault4"  placeholder='من فضلك ادخل الاسم كما بالبطاقة'/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault5" className="form-label">هوية المستأجر</label>
                    <input type="number" value={tenantId} onChange={(e)=>setTenantId(e.target.value)} className="form-control" id="validationDefault5" placeholder='من افضلك ادخل الرقم القومي' required/>
                </div>
                <h5></h5>
                <div className="col-md-4">
                    <label htmlFor="validationDefault6" className="form-label">رقم الجوال للمستأجر</label>
                    <input type="number" value={tenantPhone} onChange={(e)=>setTenantPhone(e.target.value)} className="form-control" id="validationDefault6" placeholder='ادخل الرقم' aria-describedby="inputGroupPrepend2" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault7" className="form-label">عيد ميلاد المستأجر</label>
                    <input type="date" value={tenantDate} onChange={(e)=>setTenantDate(e.target.value)} className="form-control" id="validationDefault7" required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault31" className="form-label">العنوان</label>
                    <input type="text" value={tenantAdress} onChange={(e)=>setTenantAdress(e.target.value)} className="form-control" id="validationDefault31"  placeholder='ادخل عنوان المستاجر'/>
                </div>
                <h2>معلومات العقد</h2>
                <div className="col-md-4">
                    <label htmlFor="validationDefault8" className="form-label">مبلغ الايجار السنوي</label>
                    <input type="number" value={cost} onChange={(e)=>setCost(e.target.value)} className="form-control" id="validationDefault8"  placeholder='ادخل المبلغ'/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault9" className="form-label">تاريخ بداية العقد</label>
                    <input type="date" value={costDate} onChange={(e)=>setCostDate(e.target.value)} className="form-control" id="validationDefault9" required/>
                </div>
                <h5></h5>
                <div className="col-md-3">
                    <label htmlFor="validationDefault25" className="form-label">طريقة الدفع</label>
                    <select className="form-select" id="validationDefault25" onChange={(e)=>setCostWay(e.target.value)} required>
                    <option selected disabled >اختر...</option>
                    <option>شهري</option>
                    <option>كل 3 اشهر</option>
                    <option>كل 6 اشهر</option>
                    <option>سنوي</option>
                    </select>
                </div>
                <h2>معلومات الصك </h2>
                <div className="col-md-4">
                    <label htmlFor="validationDefault10" className="form-label">رقم الصك </label>
                    <input type="number" value={houseNum} onChange={(e)=>setHouseNum(e.target.value)} className="form-control" id="validationDefault10"  placeholder=' ادخل رقم الصك'/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault25" className="form-label">نوع اثبات الملكية</label>
                    <select className="form-select" id="validationDefault35" onChange={(e)=>setCostWay(e.target.value)} required>
                    <option selected disabled >اختر...</option>
                    <option>صك إلكتروني</option>
                    <option>صك ورقي</option>
                    <option>اخري...</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault11" className="form-label">تاريخ الصك</label>
                    <input type="date" value={houseDate} onChange={(e)=>setHouseDate(e.target.value)} className="form-control" id="validationDefault11" required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault12" className="form-label">الدور</label>
                    <input type="number"value={floor} onChange={(e)=>setFloor(e.target.value)} className="form-control" id="validationDefault12" placeholder='ادخل رقم الدور' required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault13" className="form-label">الشقة</label>
                    <input type="number" value={apartmentNum} onChange={(e)=>setApartmentNum(e.target.value)} className="form-control" id="validationDefault13" placeholder='ادخل رقم الشقة' required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault14" className="form-label">عدد الادوار</label>
                    <input type="number" value={floorsNum} onChange={(e)=>setFloorsNum(e.target.value)} className="form-control" id="validationDefault14" placeholder='ادخل عدد الادوار' required/>
                </div>
                <div className="col-md-3">
                    <label htmlFor="validationDefault15" className="form-label">عدد الغرف</label>
                    <input type="number" value={roomsNum} onChange={(e)=>setRoomsNum(e.target.value)} className="form-control" id="validationDefault15" placeholder='ادخل عدد الغرف في الشقة' required/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault35" className="form-label"> هل يوجد مصعد ؟</label>
                    <select className="form-select" id="validationDefault25" onChange={(e)=>setElevator(e.target.value)} required>
                    <option selected disabled >اختر...</option>
                    <option>يوجد</option>
                    <option>لا يوجد</option>
                    </select>
                </div>
                <h2> العنوان الوطني للعقار المُأجَّر</h2>
                <div className="col-md-4">
                    <label htmlFor="validationDefault16" className="form-label">  المدينة</label>
                    <input type="text" value={countryName} onChange={(e)=>setCountryName(e.target.value)} className="form-control" id="validationDefault16"  placeholder='ادخل اسم المدينة'/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationDefault17" className="form-label">الحي</label>
                    <input type="text" value={cityName} onChange={(e)=>setCityName(e.target.value)} className="form-control" id="validationDefault17" required  placeholder='ادخل اسم الحي'/>
                </div>
                <div className="col-12" id={styles.submit}>
                    <button  className="btn btn-primary" type="submit" onClick={sendOrder}>ارسال</button>
                </div>
            </form>
        </div>
    </div>
  )
}
