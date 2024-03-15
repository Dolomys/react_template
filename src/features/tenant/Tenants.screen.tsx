import { Button, Stack, Typography } from "@mui/material";
import { Tenant } from "@services/tenant/tenant.model";
import { useMemo, useState } from "react";
import { tenantTableFakeData } from "src/fakeData/faker";
import { COLORS } from "@constants/colors.constant";
import { MaterialReactTable, useMaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { getMaterialTableConfig } from "@components/table/MaterialTable.config";
import { MRT_Localization_FR } from "material-react-table/locales/fr";

const TenantsScreen = () => {
  const [data, setData] = useState<Tenant[]>([...tenantTableFakeData.tenants]);
  const [expanded, setExpanded] = useState<string>();

  const columns = useMemo<MRT_ColumnDef<Tenant>[]>(
    () => [
      {
        accessorKey: "firstname", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "lastname",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address.address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "age",
        header: "Age",
        size: 150,
      },
      {
        accessorKey: "gender",
        header: "Genre",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    ...getMaterialTableConfig<Tenant>(),
    localization: MRT_Localization_FR,
  });

  return (
    <Stack spacing={3}>
      <Stack direction="row" justifyContent={"space-between"}>
        <Typography color={COLORS.primary} variant="h3">
          Locataires
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button>Ajouter un Locataire</Button>
          <Button variant="containedLight">Export</Button>
        </Stack>
      </Stack>
      <MaterialReactTable table={table} />
      {/* <TanTable
        data={data}
        columns={columns}
        expandedRow={expanded}
        minWidth={1200}
        customExpandedNode={(rowData) => <CustomMap data={rowData} />}
      /> */}
    </Stack>
  );
};

export default TenantsScreen;