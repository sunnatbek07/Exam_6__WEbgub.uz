import React, { useEffect, useState } from "react";
import { Table, Button, Space, Input, Modal, Form, Breadcrumb } from "antd";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import moment from "moment";
import "./style.scss";
import coursesApi from './../../service/courses/index';


const index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    coursesApi.getAll().then((res) => {
      console.log(res.data);
      setCourses(res.data.courses);
    })
  }, [])

  const data =

    courses.map((item) => {
      const data = {
        id: item._id,
        name: item.title,
        count: item.students.length,
        time: item.createdAt,
      }
      return data
    })

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [order, setOrder] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [imageLink, setimageLink] = useState("");
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
        <Space>
          <div className="edit">
            <Button type="link" onClick={() => showModal()}>
              Edit
            </Button>
          </div>
          <div className="danger">
            <Button type="link" danger>
              Delete
            </Button>
          </div>
        </Space>
      ),
    },
  ];

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
        <button onClick={showModal}>
          <i className="bx bx-plus-circle text-[32px] text-[#287c36] hover:text-[#4dff6b]"></i>
        </button>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={(record) => record.about}
      />
      <Modal
        title="Tahrirlash"
        visible={editModalVisible}
        onCancel={() => setEditModalVisible(false)}
      >
        <Form layout="vertical">
          <Form.Item label="Tartib raqami">
            <Input value={order} onChange={(e) => setOrder(e.target.value)} />
          </Form.Item>
          <Form.Item label="Kurs haqida">
            <Input value={about} onChange={(e) => setAbout(e.target.value)} />
          </Form.Item>
          <Form.Item label="Kurs nomi">
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item label="Rasm linki">
            <Input
              value={imageLink}
              onChange={(e) => setimageLink(e.target.value)}
            />
          </Form.Item>

          <button
            className="px-4 py-1 rounded-[15px] border-[1px] border-[#00000034]"
          >
            O'zgartirish
          </button>
        </Form>
      </Modal>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Space direction="vertical" style={{ marginBottom: 16, width: "100%" }}>
          <Input
            placeholder="Tartib raqami"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          />

          <Input
            placeholder="Kurs nomi"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Kurs haqida"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <Input
            placeholder="Rasm linki"
            value={imageLink}
            onChange={(e) => setimageLink(e.target.value)}
          />
          <Button>Add</Button>
        </Space>
      </Modal>
    </div>
  );
};

export default index;
