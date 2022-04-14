import Vue from 'vue';
import {
    Alert,
    AutoComplete,
    Avatar,
    Breadcrumb,
    Button,
    Card,
    Checkbox,
    Col,
    Collapse,
    ConfigProvider,
    DatePicker,
    Descriptions,
    Divider,
    Dropdown,
    Empty,
    FormModel,
    Icon,
    Input,
    Layout,
    List,
    Menu,
    Modal,
    Pagination,
    Popconfirm,
    Popover,
    Radio,
    Row,
    Select,
    Spin,
    Switch,
    Table,
    Tabs,
    Tag,
    TimePicker,
    Timeline,
    Tooltip,
    Transfer,
    Tree,
    message,
    notification,
} from 'ant-design-vue';
import type { Column } from 'ant-design-vue/types/table/column';
import type { AntdComponent } from 'ant-design-vue/types/component';

export type AntColumn = Omit<Column, keyof AntdComponent>;

export const initAnt = () => {
    const { Item: FormItem } = FormModel;
    const { Password, Search } = Input;
    const { RangePicker, MonthPicker } = DatePicker;
    const { Item: DescriptionItem } = Descriptions;
    const { confirm, info } = Modal;
    const { Group } = Checkbox;
    const { Group: RadioGroup, Button: buttonRadio } = Radio;
    const { Panel } = Collapse;
    const { Item: ListItem } = List;
    const { Item: TimelineItem } = Timeline;
    const { DirectoryTree, TreeNode } = Tree;
    const { TabPane } = Tabs;
    const { Option: aSelectOption } = Select;
    const { Header, Footer, Content } = Layout;
    const { Item: BreadcrumbItem } = Breadcrumb;
    const { SubMenu, Item: MenuItem, ItemGroup } = Menu;

    Vue.use(Tag)
        .use(Tabs)
        .use(Button)
        .use(TabPane)
        .use(Dropdown)
        .use(Tree)
        .use(Spin)
        .use(DirectoryTree)
        .use(TreeNode)
        .use(Alert)
        .use(Card)
        .use(List)
        .use(ListItem)
        .use(Input)
        .use(Search)
        .use(Password)
        .use(FormModel)
        .use(FormItem)
        .use(DatePicker)
        .use(TimePicker)
        .use(RangePicker)
        .use(MonthPicker)
        .use(Table)
        .use(Pagination)
        .use(Checkbox)
        .use(Group)
        .use(Radio)
        .use(RadioGroup)
        .use(buttonRadio)
        .use(Descriptions)
        .use(DescriptionItem)
        .use(Collapse)
        .use(Panel)
        .use(ConfigProvider)
        .use(Popover)
        .use(Tooltip)
        .use(Popconfirm)
        .use(Timeline)
        .use(TimelineItem)
        .use(Empty)
        .use(Modal)
        .use(Select)
        .use(aSelectOption)
        .use(Transfer)
        .use(Switch)
        .use(Layout)
        .use(Header)
        .use(Footer)
        .use(Content)
        .use(Menu)
        .use(SubMenu)
        .use(MenuItem)
        .use(ItemGroup)
        .use(Breadcrumb)
        .use(BreadcrumbItem)
        .use(Row)
        .use(Col)
        .use(Dropdown)
        .use(Divider)
        .use(Avatar)
        .use(List)
        .use(Icon)
        .use(AutoComplete);

    Vue.prototype.$form = FormModel;
    Vue.prototype.$message = message;
    Vue.prototype.$confirm = confirm;
    Vue.prototype.$info = info;
    Vue.prototype.$notification = notification;
};
