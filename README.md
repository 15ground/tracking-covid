<!-- Library can set up cho tracking app -->
#npm i --save axios, highcharts, highcharts-react-official, lodash, moment, @highcharts/map-collection, @material-ui/core, @fontsource/roboto
<!-- Kien thuc base -->
...Cách tạo react app...
sudo npm install -g create-react-app
create-react-app ten_app --template typescript (Neu viet theo ts)
create-react app ten_app (Neu viet theo js)
...Kiến thức JavaScript...
/Var: Biến var sẽ có scope là globally scoped. Đặc biệt, biến var còn có thêm tính chất hoisting: nghĩa là dù khai báo ở đâu thì biến đều sẽ được đem lên đầu scope trước khi code được thực hiện.
/Let: Biến let được khai báo sẽ có scope là block scoped chứ không phải globally hay locally scoped.
/Const: * Trong biến const nếu trường hợp kiểu của biến là primitive (bao gồm string, number, boolean, null, và undefined) thì chúng ta sẽ không thể tái khai báo hay cập nhật giá trị mới để thay thế cho giá trị trước đó của biến.
    const greeting = "say Hi";
    greeting = "say Hello instead"; // error : Assignment to constant variable. 

    ------------------------------------------------

    const greeting = "say Hi";
    const greeting = "say Hello instead"; // error : Identifier 'greeting' has already been declared
    * Đối với trường hợp kiểu biến là reference (bao gồm object, array, và function) thì tuy không thể tái khai báo hay cập nhật giá trị của biến nhưng chúng ta vẫn có thể cập nhật giá trị cho thuộc tính của biến đó.
        const greeting = {
        message : "Hello",
        number : "five"
    }

    greeting.message = "say Hello instead";
    console.log(greeting); // {message:"say Hello instead",number:"five"}
* - Trong JavaScript, các kiểu dữ liệu được chia thành những loại cơ bản như sau:
+ string
+ number
+ boolean
+ object
+ undefined
+ array (đây là một trường hợp đặc biệt của kiểu dữ liệu object)
/Toán tử 3 ngồi: Cần tìm hiểu