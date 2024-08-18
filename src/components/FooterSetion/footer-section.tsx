import { Layout } from "antd";

const {Footer} = Layout;

export const FooterSection = () => {
    return (
        <Footer className='text-center' style={{backgroundColor:'#8fa38a'}}>
            E-Commerce ©{new Date().getFullYear()} Created by <span className='text-sky-600'>Md Shofiul Islam</span>
        </Footer>
    );
}