import React, { useState } from 'react';
import { Form, Input, Select, Modal } from 'antd';
import './style.scss';

const Card = ({ state: { title, description, image, students } }) => {
    const MyFormItemContext = React.createContext([]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = (value) => {
        console.log(value);
    }
    function toArr(str) {
        return Array.isArray(str) ? str : [str];
        
    }
    const MyFormItemGroup = ({ prefix, children }) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
        return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
    };
    const MyFormItem = ({ name, ...props }) => {
        const prefixPath = React.useContext(MyFormItemContext);
        const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
        return <Form.Item name={concatName} {...props} />;
    };

    const onChange = (value) => {
        // console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        // console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


        
    return (
        <div className='card hover:shadow-lg duration-300'>
            <div className='card_header'>
                <img src={image} alt="Card image" />
            </div>
            <div className='card_body'>
                <div className='card_body-top'>
                    <p className='students'>{students.length} {students.length < 2 ? "Student" : "Students"}</p>
                    <p className='time'>01h 49m</p>
                </div>

                <h4 title={description}>
                    {description.length > 20 ? String(description).slice(0, 20) + "..." : description}
                </h4>

                <div className='card_body-bottom'>
                    <p className='price'>$1999.99</p>
                    <i className='bx bx-cart-alt' onClick={() => showModal()}></i>
                </div>
            </div>

            <Modal open={isModalOpen} cancelText="Bekor qilish" onCancel={handleCancel} onOk={handleOk} okText="Jo'natish">
                <div className='modal_top'>
                    <span>Kurslar</span>
                </div>
                <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <MyFormItemGroup prefix={['user']}>
                        <MyFormItemGroup prefix={['name']}>
                            <MyFormItem name="firstName" label="Ism familiya sharifingiz">
                                <Input placeholder='F.I.SH' required />
                            </MyFormItem>
                            <MyFormItem name="pnone_number" label="Telefon Raqamingiz">
                                <Input placeholder='90 000 00 00' />
                            </MyFormItem>
                        </MyFormItemGroup>
                    </MyFormItemGroup>
                </Form>
            </Modal>
        </div >
    )
}

export default Card;