import React from "react";
import Container from "../../components/ui/container";
import { cn } from "../../lib/utils";

const ParametersContainer = ({title,children,value})=>{
    return(
        <Container className={`w-full h-auto p-8 py-6 pb-8 rounded-2xl`}>
            <div className="w-full h-auto flex flex-col justify-center items-center gap-8">
                <div className="w-full h-auto flex flex-row justify-between items-center">
                    <p className={`w-auto h-auto text-lg font-medium text-zinc-900`}>{title}</p>
                    <p className={`w-auto h-auto text-xl font-semibold text-zinc-900`}>{value}</p>
                </div>
                <div className={`w-full h-auto flex flex-row justify-center items-center`}>
                    {children}
                </div>
            </div>
        </Container>
    );
}

export default ParametersContainer;