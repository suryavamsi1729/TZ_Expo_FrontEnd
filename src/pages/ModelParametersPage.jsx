import React, { useState } from "react";
import Layout from "../layouts/Layout";
import { Slider } from "../components/ui/slider";
import ParametersContainer from "./modelparameters/ParametersContainer";

const ModelParametersPage = ({className,children})=>{
    const [temp,setTemp]=useState(50);
    const [temp1,setTemp1]=useState(50);
    const [temp2,setTemp2]=useState(50);
    return(
        <Layout>
            <div className="w-full h-auto flex flex-col justify-center items-center gap-4 p-2">
                <div className="w-full h-auto flex flex-row justify-start items-center p-2">
                    <h1 className="text-lg text-zinc-900 font-medium">Set your own Parameters for the Model</h1>
                </div>
                <div className="w-full h-auto grid grid-cols-2 gap-6">
                    <ParametersContainer title={"Temparature"} value={temp}>
                        <Slider  value={[temp]} onValueChange={(val) => setTemp(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                    <ParametersContainer title={"Temparature"} value={50}>
                        <Slider  value={[temp1]} onValueChange={(val) => setTemp1(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                </div>
            </div>
        </Layout>
    );
}

export default ModelParametersPage;