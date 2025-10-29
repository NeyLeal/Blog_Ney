import clsx from "clsx";

type SpinLoaderProps = {
    containerClasses?: string
}

export function SpinLoader({ containerClasses }: SpinLoaderProps){
    const classes = clsx("flex items-center justify-center min-h-screen", containerClasses);
    return (
       <div className={classes}>
        <div className={clsx("animate-pulse")}>
            <div className={clsx("animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-amber-950")}>
            
            </div>
        </div>
       </div>
    )
}