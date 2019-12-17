export const dataCVPB = [
  {
    index: 'CVPB1',
    name:
      'Kiểm tra nguyên liệu đầu vào cho sản xuất thuốc bột Hapacol 250 trong tháng 01/2020',
    censor: 'GĐ. Nguyễn Việt Hùng',
    dateStart: `20/11/2019`,
    dateFinish: '20/12/2019',
    weight: 0.4,
    status: 30,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết',
    remainWeight: '0.5',
    type: 'Kiểm tra nguyên liệu đầu vào',
    relatedDepartment: 'Kho'
  },
  {
    index: 'CVPB2',
    name: 'Kiểm tra quy trình sản xuất thuốc bột CENDEMUC tháng 12/2019',
    censor: 'GĐ. Nguyễn Việt Hùng',
    dateStart: `20/11/2019`,
    dateFinish: '20/12/2019',
    weight: 0.3,
    status: 20,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết',
    remainWeight: '0.6',
    type: 'Kiểm tra quy trình sản xuất',
    relatedDepartment: 'Kho'
  },
  {
    index: 'CVPB3',
    name: 'Kiểm tra sản phẩm đầu ra thuốc Panadol Extra trong tháng 12/2020',
    censor: 'GĐ. Nguyễn Việt Hùng',
    dateStart: `02/12/2019`,
    dateFinish: '02/01/2020',
    weight: 0.5,
    status: 80,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết',
    remainWeight: '0.6',
    type: 'Kiểm tra sản phẩm đầu ra',
    relatedDepartment: 'Kho'
  },
  {
    index: 'CVPB4',
    name: 'Kiểm tra sản phẩm đầu ra lô 145',
    censor: 'GĐ. Nguyễn Việt Hùng',
    dateStart: `20/10/2019`,
    dateFinish: '20/11/2019',
    weight: 0.1,
    status: 100,
    divide: 'Đã hoàn thành',
    detail: 'Xem chi tiết',
    remainWeight: '0.4'
  },
  {
    index: 'CVPB5',
    name: 'Kiểm tra sản phẩm đầu ra',
    censor: 'GĐ. Nguyễn Việt Hùng',
    dateStart: `20/10/2019`,
    dateFinish: '20/11/2019',
    weight: 0.7,
    status: 69,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết',
    remainWeight: '0'
  }
];

export const dataCVNV = [
  {
    index: 'CVNV1',
    departmentCode: 'CVPB1',
    name: 'Kiểm tra nguyên liệu Paracetamol: 55 Kg ',
    censor: 'Nguyễn Việt Hùng',
    worker: 'Lê Đình Phúc',
    dateStart: `18/10/2019`,
    dateFinish: '28/11/2019',
    weight: 0.15,
    status: 100,
    divide: 'Đã hoàn thành',
    detail: 'Xem chi tiết'
  },
  {
    index: 'CVNV2',
    departmentCode: 'CVPB1',
    name: 'Kiểm tra nguyên liệu Acid citric khan: 69 Kg ',
    censor: 'Nguyễn Việt Hùng',
    worker: 'Vũ Duy Mạnh',
    dateStart: `20/10/2019`,
    dateFinish: '01/12/2019',
    weight: 0.25,
    status: 13,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết'
  },
  {
    index: 'CVNV3',
    departmentCode: 'CVPB1',
    name: 'Kiểm tra nguyên liệu  Natri hydrocarbonat: 32 Kg ',
    censor: 'Nguyễn Việt Hùng',
    worker: 'Trần Trung Huỳnh',
    dateStart: `01/09/2019`,
    dateFinish: '11/11/2019',
    weight: 0.1,
    status: 91,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết'
  },
  {
    index: 'CVNV4',
    departmentCode: 'CVPB3',
    name: 'Kiểm tra bao bì cấp 1 cho  thuốc  Panadol Extra ',
    censor: 'Nguyễn Việt Hùng',
    worker: 'Phạm Đại Tài',
    dateStart: `14/09/2019`,
    dateFinish: '11/10/2019',
    weight: 0.15,
    status: -1,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết'
  },
  {
    index: 'CVNV5',
    departmentCode: 'CVPB3',
    name: 'Kiểm tra bao bì cấp 2 cho  thuốc  Panadol Extra ',
    censor: 'Nguyễn Việt Hùng',
    worker: 'Lê Đình Phúc',
    dateStart: `09/08/2019`,
    dateFinish: '28/09/2019',
    weight: 0.25,
    status: 59,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết'
  },
  {
    index: 'CVNV6',
    departmentCode: 'CVPB4',
    name: 'Kiểm tra chất lượng quy trình xưởng Thực phẩm chức năng',
    censor: 'Nguyễn Việt Hùng',
    worker: 'Vũ Duy Mạnh',
    dateStart: `10/10/2019`,
    dateFinish: '28/11/2019',
    weight: 0.05,
    status: 38,
    divide: 'Tạo công việc',
    detail: 'Xem chi tiết'
  }
];

export const dataBCCV = [
  {
    codeReport: 1,
    name: 'Báo cáo kiểm tra chất lượng thuốc nén',
    finishDate: '20-11-2019',
    censor: 'Trần Trung Huỳnh',
    // codeCensor: "KT_01",
    worker: 'Phạm Đại Tài',
    // codeWorker: "KT_02",
    department: 'Kiểm tra chất lượng',
    completed: '85.587%'
  }
];
