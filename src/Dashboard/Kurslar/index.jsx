import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, Breadcrumb, message, Upload } from "antd";
import { v4 as uuidv4 } from "uuid";
import { UploadOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
// import moment from "moment";
import "./style.scss";
import coursesApi from './../../service/courses/index';

const { TextArea } = Input;

const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    coursesApi.getAll().then((res) => {
      console.log(res.data);
      setCourses(res.data.courses);
    }).catch((err) => {
      console.log(err)
    })
  }, []);

  const data = courses.map((item) => {
    const data = {
      id: item._id,
      name: item.title,
      count: item.students.length,
      time: item.createdAt,
    }
    return data
  })

  const [form] = Form.useForm();
  const [fileContent, setFileContent] = useState('');

  const getFileContent = (e) => {
    if (Array.isArray(e)) {
    } else {
      const file = e && e.fileList && e.fileList[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setFileContent(event.target.result);
        };
        reader.readAsText(file.originFileObj);
      }
    }
    return e && e.fileList;
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showModal1 = () => {
    setIsModalOpen1(true);
  };
  const handleOk1 = () => {
    setIsModalOpen1(false);
  };
  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };
  const [createName, setCreateName] = useState("");
  const [createAbout, setCreateAbout] = useState("");


  const [editModalVisible, setEditModalVisible] = useState(false);

  const columns = [
    {
      title: "#",
      dataIndex: "order",
      key: "order",
    },
    {
      title: "Kurs Id",
      dataIndex: "id",
      key: "id",
      render: (_, record) => <p>{uuidv4()} </p>,
    },
    {
      title: "Kurs nomi",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "O'quvchilar soni",
      dataIndex: "count",
      key: "count",
    },
    {
      title: "Yaratilgan vaqti",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Tahrirlash",
      key: "action",
      render: (_, record) => (
        // <Link to={`/course?id=:`}>
        <i onClick={() => showModal()} className='bx bxs-edit text-white text-2xl bg-yellow-400 px-1 rounded-md cursor-pointer'></i>
        // </Link>
      ),
    },
  ];

  const onFinish = (values) => {
    coursesApi.update(values, fileContent).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  };

  const onFinishCreate = (values) => {
    const newCourse = {
      title: createName,
      description: createAbout
    }
    coursesApi.create({ newCourse, fileContent }).then((res) => {
      console.log(createName, createAbout)
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <div className="courses">
      <div className="main__up2">
        <Breadcrumb
          items={[
            {
              title: (
                <Link to="/dashboard" className="text-[#000] ">
                  Bosh sahifa
                </Link>
              ),
            },
            {
              title: (
                <Link to="/dashboard/kurslar" className="text-[#000] ">
                  Kurslar
                </Link>
              ),
            },
          ]}
        />
        <button onClick={showModal1}>
          <i className="bx bx-plus-circle text-[32px] text-[#287c36] hover:text-[#4dff6b]"></i>
        </button>
      </div>

      <div className="table">
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey={(record) => record.about}
        />
      </div>
      <Modal
        title="Tahrirlash"
        visible={editModalVisible}
        open={isModalOpen1}
        onOk={handleOk1}
        onCancel={handleCancel1}
        onCancel1={() => setEditModalVisible(false)}
      >
        <Form form={form} onFinish={onFinishCreate}>
          <Form.Item name="image" getValueFromEvent={getFileContent} rules={[{ required: true, message: 'Please upload an image' }]}>
            <Space direction="vertical" style={{ marginBottom: 16, width: "100%" }}>
              <Input
                placeholder="Kurs nomi"
                onChange={(e) => setCreateName(e.target.value)}
              />

              <TextArea
                rows={4}
                placeholder="Kurs haqida"
                onChange={(e) => setCreateAbout(e.target.value)}
              />
              <Upload beforeUpload={() => false} listType="picture">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Space>
          </Form.Item>
          <Button htmlType="submit" onClick={() => onFinishCreate()}
            className="px-4 py-1 rounded-[15px] border-[1px] border-[#00000034]"
          >
            Kursni qo'shish
          </Button>
        </Form>
      </Modal>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish}>
          <Form.Item name="image" getValueFromEvent={getFileContent} rules={[{ required: true, message: 'Please upload an image' }]}>
            <Space direction="vertical" style={{ marginBottom: 16, width: "100%" }}>
              <Input
                placeholder="Kurs yangi nomi"
                onChange={(e) => setOrder(e.target.value)}
              />

              <TextArea
                rows={4}
                placeholder="Kurs haqida"
                onChange={(e) => setAbout(e.target.value)}
              />
              <Upload beforeUpload={() => false} listType="picture">
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Space>
          </Form.Item>
          <Button htmlType="submit" onClick={() => onFinish()}
            className="px-4 py-1 rounded-[15px] border-[1px] border-[#00000034]"
          >
            O'zgartirish
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default index;
