import React, { use, useState } from "react";
import Layout from "../layouts/Layout";
import { Slider } from "../components/ui/slider";
import ParametersContainer from "./modelparameters/ParametersContainer";

const ModelParametersPage = ({className,children})=>{
    const [temp,setTemp]=useState(50);
    const [Threshold,setThreshold]=useState(50);
    const [context,setContext] = useState(50);
    const [fpp,setFpp] = useState(50);
    const [ss,setSs] = useState(50);
    const [noT,setNof] = useState(50);
    
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
                    <ParametersContainer title={"Threshold"} value={Threshold}>
                        <Slider  value={[Threshold]} onValueChange={(val) => setThreshold(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                    <ParametersContainer title={"Context Window"} value={context}>
                        <Slider  value={[context]} onValueChange={(val) => setContext(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                    <ParametersContainer title={"Frequency And Presence Panalty"} value={fpp}>
                        <Slider  value={[fpp]} onValueChange={(val) => setFpp(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                    <ParametersContainer title={"Stop Sequence"} value={ss}>
                        <Slider  value={[ss]} onValueChange={(val) => setSs(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                    <ParametersContainer title={"No Of Tokens"} value={noT}>
                        <Slider  value={[noT]} onValueChange={(val) => setNof(val[0])}  min={0} max={100} step={1}/>
                    </ParametersContainer>
                </div>
                <button className="commonShadow w-auto h-auto px-8 py-2 rounded-lg  bg-white text-xl text-zinc-900 font-semibold mt-6">
                    Submit
                </button>
            </div>
        </Layout>
    );
}

export default ModelParametersPage;