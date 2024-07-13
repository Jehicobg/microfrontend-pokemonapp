import React from 'react';
import dynamic from 'next/dynamic';
import LoadingComponent from '@/components/molecules/LoadingComponent';
import ErrorRemoteLoading from '@/components/molecules/ErrorRemoteLoading';


const dynamicComponents = {
    App1: dynamic(() => import('app1/App').then(mod => mod.default).catch(() => { return { default: () => <ErrorRemoteLoading message='Error app' numberApp={1} /> } }), { ssr: false, loading: () => <LoadingComponent numberApp={1} /> }),
    App2: dynamic(() => import('app2/App').then(mod => mod.default).catch(() => { return { default: () => <ErrorRemoteLoading message='Error app' numberApp={2} /> } }), { ssr: false, loading: () => <LoadingComponent numberApp={2} /> }),
    App3: dynamic(() => import('app3/App').then(mod => mod.default).catch(() => { return { default: () => <ErrorRemoteLoading message='Error app' numberApp={3} /> } }), { ssr: false, loading: () => <LoadingComponent numberApp={3} /> }),
}

const DynamicComponentApp1 = dynamicComponents['App1'];

const DynamicComponentApp2 = dynamicComponents['App2'];

const DynamicComponentApp3 = dynamicComponents['App3'];


type LoadRemoteComponentProps = {
    appPath: string;
};

const LoadRemoteComponent: React.FC<LoadRemoteComponentProps> = ({ appPath }) => {
    if (appPath === 'app1/App') return <DynamicComponentApp1 />;
    if (appPath === 'app2/App') return <DynamicComponentApp2 />;
    if (appPath === 'app3/App') return <DynamicComponentApp3 />;
    return null; // Por si no coincide ningún appPath
};

export default LoadRemoteComponent;
