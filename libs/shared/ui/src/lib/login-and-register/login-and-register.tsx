/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SwitchTransition,
  useNotifications,
} from '@k-workspace/shared/components';
import { useForm, useMutation } from '@k-workspace/shared/hooks';
import type { TState } from '@k-workspace/types';
import {
  classNames,
  httpDriver,
  LOCAL_STORAGE_KEYS,
  saveItem,
} from '@k-workspace/utils';
import { useState } from 'react';

export interface LoginAndRegisterProps {
  type: string;
  setOpen: TState;
}
type TTabs = {
  name: string;
  current: boolean;
  key: string;
}[];

const loginHandler = async (body: any): Promise<unknown> => {
  const data = await httpDriver('/authentication/login', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return data;
};

const registerHandler = async (body: any): Promise<unknown> => {
  const data = await httpDriver('/authentication/register', {
    method: 'POST',
    body: JSON.stringify(body),
  });
  return data;
};

const Tabs = ({ tabs, setTabs }: { tabs: TTabs; setTabs: TState }) => (
  <div className="pb-5">
    <div className="border-b border-gray-200">
      <nav
        className="-mb-px flex items-center justify-center"
        aria-label="Tabs"
      >
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={classNames(
              tab.current
                ? 'border-indigo-500 text-indigo-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'w-1/4 pb-4 px-1 text-center border-b-2 font-medium text-sm'
            )}
            onClick={() =>
              setTabs((old: TTabs) =>
                old.map((item) =>
                  item.key === tab.key
                    ? { ...item, current: true }
                    : { ...item, current: false }
                )
              )
            }
          >
            {tab.name}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

const Login = ({ setOpen }: { setOpen: TState }) => {
  const { success, error } = useNotifications();

  const { mutate } = useMutation(loginHandler, {
    onSuccess: (data) => {
      saveItem(LOCAL_STORAGE_KEYS.GET_USER, data);
      success('You have successfully logged in');
      setOpen(false);
    },
    onError: ({ data }) => {
      error('Something went wrong', data?.errors);
    },
  });

  const initialValues = {
    email: '',
    password: '',
  };
  const { handelChange, handelSubmit, values } = useForm<typeof initialValues>({
    initialValues: initialValues,
    onSubmit: async (values) => {
      mutate(values);
    },
  });
  return (
    <div className="pt-8 px-4">
      <form className="space-y-6" onSubmit={handelSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={handelChange}
              value={values.email}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={handelChange}
              value={values.password}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

const Register = ({ setTabs }: { setTabs: TState }) => {
  const { success, error } = useNotifications();

  const { mutate } = useMutation(registerHandler, {
    onSuccess: () => {
      setTabs((old: TTabs) =>
        old.map((item) =>
          item.key === 'register'
            ? { ...item, current: false }
            : { ...item, current: true }
        )
      );
      success('Register Successfully', 'Please login');
    },
    onError: ({ data }) => {
      error('Something went wrong', data?.errors);
    },
  });

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const { handelChange, handelSubmit, values } = useForm<typeof initialValues>({
    initialValues: initialValues,
    onSubmit: async (values) => {
      mutate(values);
    },
  });

  return (
    <div className="px-4">
      <form className="space-y-6" onSubmit={handelSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            name
          </label>
          <div className="mt-1">
            <input
              id="name"
              name="name"
              type="text"
              onChange={handelChange}
              value={values.name}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={handelChange}
              value={values.email}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={handelChange}
              value={values.password}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export const LoginAndRegister = ({ type, setOpen }: LoginAndRegisterProps) => {
  const [tabs, setTabs] = useState<TTabs>([
    { name: 'Sign in', current: type === 'login', key: 'login' },
    { name: 'Sign up', current: type === 'register', key: 'register' },
  ]);

  const activeTab = tabs?.find((e) => e.current)?.key;
  return (
    <div className="h-96">
      <Tabs tabs={tabs} setTabs={setTabs} />
      <SwitchTransition name={'login'} currentPage={activeTab}>
        <Login setOpen={setOpen} />
      </SwitchTransition>
      <SwitchTransition name={'register'} currentPage={activeTab}>
        <Register setTabs={setTabs} />
      </SwitchTransition>
    </div>
  );
};
