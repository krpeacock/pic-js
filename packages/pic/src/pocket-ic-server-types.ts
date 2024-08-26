/**
 * Options for starting a PocketIC server.
 */
export interface StartServerOptions {
  /**
   * Whether to pipe the runtimes's logs to the parent process's stdout.
   */
  showRuntimeLogs?: boolean;

  /**
   * Whether to pipe the canister logs to the parent process's stderr.
   */
  showCanisterLogs?: boolean;

  /**
   * Path to the PocketIC binary.
   */
  binPath?: string;

  /**
   * The time-to-live of the PocketIC server in seconds [default: 60]
   */
  ttl?: number;
}
