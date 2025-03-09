import React from "react";
import Layout from "../layouts/Layout";
import Container from "../components/ui/container";
const WebcamPage = () => {
    return (
        <Layout>
            <Container className="w-full h-[640px] rounded-[16px] p-0 bg-transparent">
                <iframe src="https://www.youtube.com/embed/3X4R1VQ4G8Q" className="w-full h-full rounded-[16px]" title="Webcam"></iframe>
            </Container>
        </Layout>
    );
}   

export default WebcamPage;