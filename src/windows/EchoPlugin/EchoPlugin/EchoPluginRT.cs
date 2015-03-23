namespace EchoRuntimeComponent
{
    public sealed class EchoPluginRT
    {
        public static string Echo(string options)
        {
            if (!string.IsNullOrEmpty(options))
            {
                return string.Format("Hello {0}", options);
            }
            return "Error in input string.";
        }
    }
}
