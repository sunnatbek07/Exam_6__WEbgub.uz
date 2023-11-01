import React, { useState } from 'react';
import { Modal } from 'antd';
import './style.scss';
import { Form, Input, Select } from 'antd';
const MyFormItemContext = React.createContext([]);


const ServicesCard = ({ state: { title, description, image, createdAt, users } }) => {
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
        <div className='service_card shadow-md hover:shadow-xl duration-300'>
            <div className='service_card-header'>
                <img src={`https://api.webhub.uz${image}`} alt="Service Card image" />
            </div>

            <div className='service_card_body'>
                <div className='service_card_body-top'>
                    <p className='students'>{users.length} Students</p>
                    <p className='time'>{createdAt}</p>
                </div>

                <h4 title={description}>
                    {description.length > 40 ? String(description).slice(0, 40) + '...' : description}
                </h4>

                <div className='service_card_body-bottom'>
                    <p className='price'>$1999.99</p>
                    <i className='bx bx-cart-alt' onClick={() => showModal()}></i>
                </div>
            </div>

            <Modal open={isModalOpen} cancelText="Bekor qilish" onCancel={handleCancel} onOk={handleOk} okText="Jo'natish">
                <div className='modal_top'>
                    <span>Xizmatlar</span>
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
                            <MyFormItem name="type" label="Xizmatni tanlang">
                                <Select
                                    showSearch
                                    placeholder="Select..."
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={filterOption}
                                    options={[
                                        {
                                            value: 'service1',
                                            label: 'Web sahifa yaratish',
                                        },
                                        {
                                            value: 'service2',
                                            label: 'Mobil ilova yaratish',
                                        },
                                    ]}
                                />
                            </MyFormItem>
                        </MyFormItemGroup>
                    </MyFormItemGroup>
                </Form>
            </Modal>
        </div >
    )
}

export default ServicesCard;