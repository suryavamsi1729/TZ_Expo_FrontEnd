import React, { useState,useRef } from "react";
import { useEffect } from "react";
import Layout from "../layouts/Layout";
import { useNavigate } from "react-router-dom";
import SelectCemaras from "../components/cemarars/SelectCemaras";
import CemaraItem from "../components/cemarars/CemaraItem";




const CemarasPage = ({className,children})=>{
    const [typeCemaras,setTypeCemaras] = useState(null);
    const [activeCount,setActiveCount] = useState(0);
    const [deactiveCount,setDeactiveCount] = useState(0);
    const data = [
        {
            id:1,
            status:true
        },
        {
            id:2,
            status:true
        },
        {
            id:3,
            status:true
        },
        {
            id:4,
            status:false
        },
        {
            id:5,
            status:true
        },
        {
            id:6,
            status:false
        },
    ];
    
    useEffect(()=>{
        let oncount=0;
        let offcount=0;
        data.map((item)=>{
            if(item.status){
                oncount++;
            }
            else{
                offcount++;
            }
        });
        setActiveCount(oncount);
        setDeactiveCount(offcount);
    },[]);

    return(
        <Layout>
            <div className="w-full h-auto flex flex-col justify-center items-start gap-8 p-2">
                <h1 className=" text-start text-3xl font-bold text-zinc-900"> CCTV Footage</h1>
                <div className="w-full h-auto flex flex-col justify-start items-start gap-4">
                    <div className="w-full h-auto flex flex-row justify-start items-center gap-6">
                        <div className="grow h-full flex flex-row justify-start items-center gap-6">
                            <p className={`text-[14px] text-zinc-900 font-medium ${typeCemaras===null?"flex":typeCemaras?"flex":"hidden"} flex-row justify-center items-center gap-2`}><span className="inline-block w-[7px] h-[7px] rounded-full bg-green-500"></span><span className="inline-block">{`${activeCount} Cemaras Activated`}</span></p>
                            <p className={`text-[14px] text-zinc-900 font-medium ${typeCemaras===null?"flex":!typeCemaras?"flex":"hidden"} flex flex-row justify-center items-center gap-2`}><span className="inline-block w-[7px] h-[7px] rounded-full bg-red-500"></span><span className="inline-block">{`${deactiveCount} Cemaras Deactive`}</span></p>
                        </div>
                        <SelectCemaras setTypeCemaras={setTypeCemaras} />
                    </div>
                    <div className="w-full h-auto grid grid-cols-3 gap-6">
                        {
                            data.filter((itm)=>{
                                if(typeCemaras===null){
                                    return true;
                                }
                                else{
                                    return itm.status===typeCemaras
                                }
                            }).map((item,index)=>{
                                return(
                                    <CemaraItem item={item}/>
                                );
                            })
                        }
                        
                        
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default CemarasPage;
