import React, { useState } from 'react';
import { Button, Drawer, Space } from 'antd';
const Drawerrr = () => {

    const [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    
    return (
        <>
            <Drawer
                title="Menu"
                width={500}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button type="primary" onClick={onClose}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default Drawerrr;