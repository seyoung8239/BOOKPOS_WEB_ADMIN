import { useState, useEffect } from "react";
import axios from "axios";

import { baseDir } from "../Constant";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Inquiry() {
    const [inquiryList, setInquiryList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(`${baseDir}/estimation`);
            setInquiryList(data.data);
        }
        fetchData();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper
                sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    height: "90%",
                }}
            >
                <Typography variant="h4" mt={4} mb={4}>
                    도입문의 관리
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>상호명</TableCell>
                                <TableCell>업태</TableCell>
                                <TableCell>소속작가 수</TableCell>
                                <TableCell>담당자명</TableCell>
                                <TableCell>담당자 이메일</TableCell>
                                <TableCell>담당자 연락처</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inquiryList.map((row) => (
                                <Row key={row._id} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    );
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell>{row.company_name}</TableCell>
                <TableCell>{row.company_business_category}</TableCell>
                <TableCell>{row.company_writers}</TableCell>
                <TableCell>{row.manager_name}</TableCell>
                <TableCell>{row.manager_email}</TableCell>
                <TableCell>{row.manager_cell}</TableCell>
            </TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <Typography variant="h6" gutterBottom component="div">
                        문의 상세정보
                    </Typography>
                    <Table size="small" aria-label="purchases">
                        <TableRow>상호명: {row.company_name}</TableRow>
                        <TableRow>
                            대표자명: {row.company_representative}
                        </TableRow>
                        <TableRow>
                            사업자 등록번호: {row.company_business_number}
                        </TableRow>
                        <TableRow>
                            업태 / 종목: {row.company_business_category}
                        </TableRow>
                        <TableRow>회사 사이트: {row.company_webpage}</TableRow>
                        <TableRow>사업자 주소: {row.company_addrerss}</TableRow>
                        <TableRow>소속작가 수: {row.company_writers}</TableRow>
                        <TableRow></TableRow>
                        <TableRow>담당자명: {row.manager_name}</TableRow>
                        <TableRow>담당자 이메일: {row.manager_email}</TableRow>
                        <TableRow>담당자 휴대전화: {row.manager_cell}</TableRow>
                        <TableRow>담당자 유선: {row.manager_phone}</TableRow>
                        <TableRow>담당자 직급: {row.manager_hier}</TableRow>
                        <TableRow>세금계산서 담당자명: {row.tax_name}</TableRow>
                        <TableRow>
                            세금계산서 담당자 이메일: {row.tax_email}
                        </TableRow>
                        <TableRow></TableRow>
                        <TableRow>북포스 관리자명: {row.admin_name}</TableRow>
                        <TableRow>
                            등록하고 싶은 관리자 ID: {row.admin_id}
                        </TableRow>
                    </Table>
                </Collapse>
            </TableCell>
        </>
    );
}

export default Inquiry;