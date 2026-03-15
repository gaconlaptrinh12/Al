# Báo cáo kiểm thử hiệu năng với JMeter

## 1. Mục tiêu
Thực hiện kiểm thử hiệu năng cơ bản cho website **Wikipedia** bằng Apache JMeter nhằm:
- Làm quen với cách xây dựng Test Plan.
- Thiết lập nhiều Thread Group với mức tải khác nhau.
- Thu thập và phân tích các chỉ số chính: **Response Time**, **Throughput**, **Error Rate**.

## 2. Website được chọn
- Website: `https://en.wikipedia.org`
- Lý do chọn:
  - Truy cập công khai, dễ kiểm thử ở mức học tập.
  - Có nhiều trang con để tạo kịch bản GET.
  - Phù hợp với yêu cầu bài tập mà không cần đăng nhập.

## 3. Cấu trúc thư mục
```text
jmeter/
├─ performance_test_plan.jmx
├─ README.md
└─ results/
   ├─ summary_report_sample.csv
   └─ screenshots/
```

## 4. Các kịch bản kiểm thử

### Thread Group 1 – Kịch bản cơ bản
- Số lượng người dùng (Threads): **10**
- Ramp-up: **10 giây**
- Loop Count: **5**
- Hành vi:
  - Gửi HTTP GET đến trang chủ `/`

### Thread Group 2 – Kịch bản tải nặng
- Số lượng người dùng (Threads): **50**
- Ramp-up: **30 giây**
- Loop Count: **2**
- Hành vi:
  - Gửi HTTP GET đến `/`
  - Gửi HTTP GET đến `/wiki/Software_testing`

### Thread Group 3 – Kịch bản tùy chỉnh
- Số lượng người dùng (Threads): **20**
- Ramp-up: **10 giây**
- Duration: **60 giây**
- Hành vi:
  - Gửi HTTP GET đến `/wiki/Software_testing`
  - Gửi HTTP GET đến `/wiki/Performance_testing`

## 5. Công cụ và cấu hình
- Công cụ: **Apache JMeter**
- Thành phần sử dụng trong Test Plan:
  - **HTTP Request Defaults**
  - **3 Thread Group**
  - **HTTP Request Sampler**
  - **View Results Tree**
  - **Summary Report**
  - **Simple Data Writer** để lưu kết quả CSV

## 6. Cách chạy bài kiểm thử
1. Mở Apache JMeter.
2. Chọn file `performance_test_plan.jmx`.
3. Kiểm tra lại đường dẫn file CSV trong phần `Simple Data Writer` nếu cần.
4. Chạy lần lượt từng Thread Group hoặc chạy toàn bộ Test Plan.
5. Xuất kết quả bằng:
   - file CSV trong thư mục `results/`
   - ảnh chụp màn hình `Summary Report`

## 7. Chỉ số cần thu thập
Sau khi chạy, cần ghi nhận các chỉ số sau cho từng Thread Group:
- **Average Response Time (ms)**
- **Min / Max Response Time (ms)**
- **Throughput**
- **Error %**

## 8. Nhận xét mẫu
> Kịch bản cơ bản thường có thời gian phản hồi thấp và tỷ lệ lỗi gần bằng 0%.
>
> Kịch bản tải nặng có thể làm thời gian phản hồi tăng do số lượng người dùng đồng thời lớn hơn.
>
> Kịch bản tùy chỉnh trong 60 giây giúp quan sát tính ổn định của website khi tải lặp lại liên tục.

## 9. Kết luận
Bài kiểm thử này đáp ứng yêu cầu học phần:
- Có thư mục `jmeter` trong repo.
- Có ít nhất **3 kịch bản kiểm thử** khác nhau.
- Có file **.jmx** để chạy trong JMeter.
- Có **README.md** để báo cáo ngắn gọn.
- Có thể bổ sung ảnh/video và file CSV kết quả sau khi chạy thực tế.

## 10. Minh chứng cần nộp thêm
Sau khi bạn chạy JMeter trên máy, hãy bổ sung vào thư mục `results/`:
- Ảnh chụp `View Results Tree` hoặc `Summary Report`
- File CSV kết quả thật
- Video quay màn hình nếu giảng viên yêu cầu
