# Cypress Exercise - Kiểm thử phần mềm

Bài thực hành kiểm thử tự động End-to-End với Cypress cho trang mẫu [SauceDemo](https://www.saucedemo.com).

## Cấu trúc bài làm

- `cypress/e2e/login_spec.cy.js`
  - Đăng nhập thành công
  - Đăng nhập thất bại
- `cypress/e2e/cart_spec.cy.js`
  - Thêm sản phẩm vào giỏ hàng
  - Sắp xếp sản phẩm theo giá tăng dần
  - Xóa sản phẩm khỏi giỏ hàng
- `cypress/e2e/checkout_spec.cy.js`
  - Kiểm tra quy trình thanh toán đến bước xác nhận đơn hàng

## Cài đặt

```bash
npm install
```

## Chạy kiểm thử

Mở giao diện Cypress:

```bash
npm run cy:open
```

Chạy toàn bộ test ở chế độ headless:

```bash
npm run cy:run
```

## Gợi ý nộp bài

Sau khi chạy test, chụp màn hình hoặc lấy video trong thư mục:

- `cypress/screenshots/`
- `cypress/videos/`

Sau đó commit toàn bộ mã nguồn và minh chứng chạy kiểm thử lên GitHub repo.
