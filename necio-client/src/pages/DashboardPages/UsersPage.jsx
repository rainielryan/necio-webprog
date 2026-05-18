import { useMemo, useState } from 'react';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Search from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import usersSeed from '../../assets/users.json?raw';

const roles = ['admin', 'editor', 'viewer'];
const genders = ['male', 'female', 'other'];

const blankForm = {
  firstName: '',
  lastName: '',
  age: '',
  gender: '',
  contactNumber: '',
  email: '',
  role: 'editor',
  username: '',
  password: '',
  address: '',
  isActive: true,
};

const labelize = (value) =>
  value ? `${String(value).charAt(0).toUpperCase()}${String(value).slice(1)}` : '';

const loadUsers = () => {
  try {
    return {
      users: JSON.parse(usersSeed).map((user, index) => ({
        id: Number(user.id) || index + 1,
        firstName: String(user.firstName ?? '').trim(),
        lastName: String(user.lastName ?? '').trim(),
        age: String(user.age ?? '').trim(),
        gender: genders.includes(String(user.gender ?? '').trim().toLowerCase())
          ? String(user.gender ?? '').trim().toLowerCase()
          : '',
        contactNumber: String(user.contactNumber ?? '').trim(),
        email: String(user.email ?? '').trim().toLowerCase(),
        role: roles.includes(String(user.role ?? '').trim().toLowerCase())
          ? String(user.role ?? '').trim().toLowerCase()
          : 'editor',
        username: String(user.username ?? '').trim().toLowerCase(),
        password: String(user.password ?? ''),
        address: String(user.address ?? '').trim(),
        isActive: typeof user.isActive === 'boolean' ? user.isActive : true,
      })),
      error: '',
    };
  } catch {
    return {
      users: [],
      error: 'Unable to read users from src/assets/users.json.',
    };
  }
};

const seed = loadUsers();

export default function UsersPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [users, setUsers] = useState(seed.users);
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const resetForm = () => {
    setForm({ ...blankForm });
    setErrors({});
  };

  const openModal = (user = null) => {
    resetForm();
    setShowPassword(false);
    if (user) {
      setModal({ open: true, id: user.id });
      setForm({
        firstName: user.firstName,
        lastName: user.lastName,
        age: user.age ?? '',
        gender: user.gender ?? '',
        contactNumber: user.contactNumber ?? '',
        email: user.email ?? '',
        role: user.role ?? 'editor',
        username: user.username ?? '',
        password: '',
        address: user.address ?? '',
        isActive: Boolean(user.isActive),
      });
    } else {
      setModal({ open: true, id: null });
    }
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    resetForm();
    setShowPassword(false);
  };

  const handleChange = (e) => {
    const { name } = e.target;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const e = {};
    const required = [
      'firstName',
      'lastName',
      'age',
      'gender',
      'contactNumber',
      'email',
      'role',
      'username',
      'address',
    ];
    if (!modal.id) {
      required.push('password');
    }
    required.forEach((field) => {
      if (!String(form[field] ?? '').trim()) {
        e[field] = 'This field is required.';
      }
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(form.email).trim())) {
      e.email = 'Enter a valid email address.';
    }
    const ageStr = String(form.age ?? '').trim();
    if (ageStr && !/^\d+$/.test(ageStr)) {
      e.age = 'Age must be numbers only.';
    }
    const contact = String(form.contactNumber ?? '').trim();
    if (contact && !/^\d{11}$/.test(contact)) {
      e.contactNumber = 'Contact number must be exactly 11 digits.';
    }
    const uname = String(form.username ?? '');
    if (/\s/.test(uname)) {
      e.username = 'Username must not contain spaces.';
    }
    const pwdTrim = String(form.password ?? '').trim();
    if (!modal.id) {
      if (pwdTrim && pwdTrim.length < 8) {
        e.password = 'Password must be at least 8 characters.';
      }
    } else if (pwdTrim.length > 0 && pwdTrim.length < 8) {
      e.password = 'Password must be at least 8 characters.';
    }
    const emailLower = String(form.email ?? '').trim().toLowerCase();
    const usernameLower = String(form.username ?? '').trim().toLowerCase();
    users.forEach((u) => {
      if (modal.id && u.id === modal.id) return;
      if (u.email === emailLower) {
        e.email = 'This email is already registered.';
      }
      if (!/\s/.test(String(form.username ?? '')) && u.username === usernameLower) {
        e.username = 'This username is already taken.';
      }
    });
    setErrors(e);
    return e;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) return;

    const existing = modal.id ? users.find((u) => u.id === modal.id) : null;
    const pwdInput = String(form.password ?? '').trim();
    const pwd = modal.id && !pwdInput ? existing?.password ?? '' : pwdInput;

    const nextUser = {
      id: modal.id ?? Math.max(0, ...users.map((u) => Number(u.id) || 0)) + 1,
      firstName: String(form.firstName).trim(),
      lastName: String(form.lastName).trim(),
      age: String(form.age).trim(),
      gender: String(form.gender).trim().toLowerCase(),
      contactNumber: String(form.contactNumber).trim(),
      email: String(form.email).trim().toLowerCase(),
      role: String(form.role).trim().toLowerCase(),
      username: String(form.username).trim().toLowerCase(),
      password: pwd,
      address: String(form.address).trim(),
      isActive: Boolean(form.isActive),
    };

    setUsers((prev) =>
      modal.id ? prev.map((u) => (u.id === modal.id ? nextUser : u)) : [...prev, nextUser],
    );
    closeModal();
  };

  const toggleStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, isActive: !u.isActive } : u)),
    );
  };

  const filteredUsers = useMemo(() => {
    const q = search.trim().toLowerCase();
    return users.filter((u) => {
      if (filterRole && u.role !== filterRole) return false;
      if (filterGender && u.gender !== filterGender) return false;
      if (filterStatus === 'active' && !u.isActive) return false;
      if (filterStatus === 'inactive' && u.isActive) return false;
      if (!q) return true;
      const hay =
        `${u.firstName} ${u.lastName} ${u.email} ${u.username}`.toLowerCase();
      return hay.includes(q);
    });
  }, [users, search, filterRole, filterGender, filterStatus]);

  const fieldProps = (name, label, extra = {}) => ({
    name,
    label,
    value: form[name],
    onChange: handleChange,
    error: Boolean(errors[name]),
    helperText: errors[name] || '',
    fullWidth: true,
    size: 'small',
    ...extra,
  });

  // Not memoized so renderCell always gets the latest openModal / toggleStatus
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      flex: 1,
      minWidth: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ''} ${row.lastName || ''}`.trim(),
    },
    { field: 'username', headerName: 'Username', width: 140 },
    {
      field: 'role',
      headerName: 'Role',
      width: 110,
      valueGetter: (value, row) => labelize(row.role),
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      sortable: false,
      renderCell: ({ row }) => (
        <Chip
          size="small"
          label={row.isActive ? 'Active' : 'Inactive'}
          color={row.isActive ? 'success' : 'error'}
          variant="filled"
        />
      ),
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 210,
      sortable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            sx={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '0.7rem' }}
            onClick={() => openModal(row)}
          >
            Edit
          </Button>
          <Button
            size="small"
            variant="contained"
            color={row.isActive ? 'warning' : 'success'}
            sx={{ textTransform: 'uppercase', fontWeight: 700, fontSize: '0.7rem' }}
            onClick={() => toggleStatus(row.id)}
          >
            {row.isActive ? 'Disable' : 'Activate'}
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'flex-start' : 'center',
          justifyContent: 'space-between',
          gap: 2,
          mb: 3,
        }}
      >
        <Typography variant="h4" component="h1" fontWeight={700}>
          Users
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: 'uppercase', fontWeight: 700 }}
          onClick={() => openModal()}
        >
          Add User
        </Button>
      </Box>

      {seed.error ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {seed.error}
        </Alert>
      ) : null}

      {users.length > 0 ? (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            sx={{ p: 2, flexWrap: 'wrap', alignItems: { xs: 'stretch', md: 'center' } }}
          >
            <TextField
              size="small"
              label="Search"
              placeholder="First name, last name, email, or username"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{ minWidth: { xs: '100%', md: 280 }, flex: { md: '1 1 280px' } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search fontSize="small" color="action" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              size="small"
              label="Role"
              select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              sx={{ minWidth: 140 }}
            >
              <MenuItem value="">All</MenuItem>
              {roles.map((r) => (
                <MenuItem key={r} value={r}>
                  {labelize(r)}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              size="small"
              label="Gender"
              select
              value={filterGender}
              onChange={(e) => setFilterGender(e.target.value)}
              sx={{ minWidth: 140 }}
            >
              <MenuItem value="">All</MenuItem>
              {genders.map((g) => (
                <MenuItem key={g} value={g}>
                  {labelize(g)}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              size="small"
              label="Status"
              select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              sx={{ minWidth: 140 }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="active">Active</MenuItem>
              <MenuItem value="inactive">Inactive</MenuItem>
            </TextField>
          </Stack>
          <Box sx={{ height: 560 }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
              pageSizeOptions={[5, 10]}
              disableRowSelectionOnClick
            />
          </Box>
          {filteredUsers.length === 0 ? (
            <Typography sx={{ px: 2, pb: 2 }} variant="body2" color="text.secondary">
              No rows match your search or filters.
            </Typography>
          ) : null}
        </Paper>
      ) : (
        <Alert severity="info">No users found. Use Add user to create your first record.</Alert>
      )}

      <Dialog open={modal.open} onClose={closeModal} fullWidth maxWidth="md">
        <DialogTitle sx={{ fontWeight: 700 }}>{modal.id ? 'Update User' : 'Add User'}</DialogTitle>
        <DialogContent dividers>
          <Box component="form" id="user-form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              {/* Row 1: First Name / Last Name */}
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <TextField {...fieldProps('firstName', 'First Name')} />
                <TextField {...fieldProps('lastName', 'Last Name')} />
              </Stack>

              {/* Row 2: Age / Gender */}
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <TextField
                  {...fieldProps('age', 'Age')}
                  inputMode="numeric"
                  placeholder="e.g. 29"
                />
                <TextField {...fieldProps('gender', 'Gender')} select>
                  <MenuItem value=""><em>Select gender</em></MenuItem>
                  {genders.map((g) => (
                    <MenuItem key={g} value={g}>{labelize(g)}</MenuItem>
                  ))}
                </TextField>
              </Stack>

              {/* Row 3: Contact / Email */}
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <TextField {...fieldProps('contactNumber', 'Contact Number')} />
                <TextField {...fieldProps('email', 'Email Address')} type="email" autoComplete="email" />
              </Stack>

              {/* Row 4: Role / Username */}
              <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
                <TextField {...fieldProps('role', 'Role')} select>
                  {roles.map((r) => (
                    <MenuItem key={r} value={r}>{labelize(r)}</MenuItem>
                  ))}
                </TextField>
                <TextField {...fieldProps('username', 'Username')} autoComplete="username" />
              </Stack>

              {/* Password */}
              <TextField
                {...fieldProps('password', modal.id ? 'Password (leave blank to keep current)' : 'Password', {
                  type: showPassword ? 'text' : 'password',
                  autoComplete: modal.id ? 'current-password' : 'new-password',
                  InputProps: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((v) => !v)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                })}
              />

              {/* Address */}
              <TextField {...fieldProps('address', 'Address')} multiline minRows={2} />

              {/* Active switch */}
              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                    color="primary"
                  />
                }
                label={form.isActive ? 'User status: Active' : 'User status: Inactive'}
                sx={{ mt: 0.5 }}
              />
            </Stack>
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button onClick={closeModal} sx={{ textTransform: 'uppercase', fontWeight: 700 }}>
            Cancel
          </Button>
          <Button
            type="submit"
            form="user-form"
            variant="contained"
            sx={{ textTransform: 'uppercase', fontWeight: 700 }}
          >
            {modal.id ? 'Update User' : 'Save User'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
